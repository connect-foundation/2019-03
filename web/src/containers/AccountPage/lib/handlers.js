import changeToHashedPassword from './encryptor';
import validateFormDatas from './validator';
import { changeToFormDataFormat } from '../../../utils';

function handleError(res) {
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  return res;
}

function fetchFormData(url, formData) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
      credentials: 'include',
    },
    body: formData,
  })
    .then(handleError)
    .then(res => res.json())
    .catch(err => {
      throw err;
    });
}

export async function onSignUpSubmitHandler(
  _signUpForm,
  setIsAuth,
  setValidities,
  setIsDuplicated,
) {
  const signUpForm = _signUpForm.current;
  const signUpURL = `${process.env.REACT_APP_API_URL}/account/signup`;

  try {
    const { isExistInvalidity, validities } = validateFormDatas(signUpForm);
    if (isExistInvalidity) {
      setValidities(validities);
      return;
    }

    changeToHashedPassword(signUpForm);
    const formData = changeToFormDataFormat(signUpForm);

    const { status, message } = await fetchFormData(signUpURL, formData);

    if (!status) return;
    if (status === 'error') {
      throw new Error(message);
    }

    setIsAuth(true);
  } catch (err) {
    if (err.message === 'Duplicated username') setIsDuplicated(true);
  }
}

export async function onSignInSubmitHandler(
  _signInForm,
  setIsAuth,
  setValidities,
) {
  const signInForm = _signInForm.current;
  const signInURL = `${process.env.REACT_APP_API_URL}/account/signin`;

  try {
    const { isExistInvalidity, validities } = validateFormDatas(signInForm);
    if (isExistInvalidity) {
      setValidities(validities);
      return;
    }

    changeToHashedPassword(signInForm);
    const formData = changeToFormDataFormat(signInForm);

    const { status, message } = await fetchFormData(signInURL, formData);
    if (!status) return;
    if (status === 'error') {
      throw new Error(message);
    }
    setIsAuth(true);
  } catch (err) {
    console.log(err);
  }
}
