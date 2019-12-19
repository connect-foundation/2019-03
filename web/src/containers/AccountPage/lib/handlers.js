import changeToHashedPassword from './encryptor';
import validateFormDatas from './validator';
import { changeToFormDataFormat } from '../../../utils';
import { SET_SIGNUP_INPUT_VALIDATION } from '../SignUp/reducer';
import { SET_SIGNIN_INPUT_VALIDATION } from '../SignIn/reducer';

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

export async function onSignUpSubmitHandler(_signUpForm, dispatch) {
  const signUpForm = _signUpForm.current;
  const signUpURL = `${process.env.REACT_APP_API_URL}/account/signup`;

  const { isExistInvalidity, validities } = validateFormDatas(signUpForm);
  if (isExistInvalidity) {
    dispatch({ type: SET_SIGNUP_INPUT_VALIDATION, validities });
    return;
  }

  const password = changeToHashedPassword(signUpForm);
  const formData = changeToFormDataFormat(signUpForm, password, false);

  const { status, message } = await fetchFormData(signUpURL, formData);

  if (!status) return;
  if (status === 'error') {
    throw new Error(message);
  }
}

export async function onSignInSubmitHandler(_signInForm, dispatch) {
  const signInForm = _signInForm.current;
  const signInURL = `${process.env.REACT_APP_API_URL}/account/signin`;

  const { isExistInvalidity, validities } = validateFormDatas(signInForm);
  if (isExistInvalidity) {
    dispatch({ type: SET_SIGNIN_INPUT_VALIDATION, validities });
    return;
  }

  const password = changeToHashedPassword(signInForm);
  const formData = changeToFormDataFormat(signInForm, password);

  const { status, message } = await fetchFormData(signInURL, formData);
  if (!status) return;
  if (status === 'error') {
    throw new Error(message);
  }
}
