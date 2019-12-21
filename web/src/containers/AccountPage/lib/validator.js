import validator from 'validator';

const isValidUsername = username => {
  const USERNAME_REGEX = /^\w{4,30}$/;
  return USERNAME_REGEX.test(username);
};

const isValidPassword = password => {
  const PASSWORD_REGEX = /^[\w\W]{8,30}$/;
  return PASSWORD_REGEX.test(password);
};

const isValidPasswordCheck = (passwordcheck, password) => {
  return password === passwordcheck;
};

const isValidName = name => {
  return validator.isLength(name, { min: 1, max: 30 });
};

const isValidEmail = email => {
  return validator.isEmail(email);
};

const isValidCellPhone = cellPhone => {
  const CELL_PHONE_REGEX = /^\d{10,11}$/;
  return CELL_PHONE_REGEX.test(cellPhone);
};

export const validateInputData = (input, password) => {
  switch (input.name) {
    case 'username':
      return isValidUsername(input.value);
    case 'password':
      return isValidPassword(input.value);
    case 'passwordcheck':
      return isValidPasswordCheck(input.value, password);
    case 'name':
      return isValidName(input.value);
    case 'email':
      return isValidEmail(input.value);
    case 'cellPhone':
      return isValidCellPhone(input.value);
    default:
      throw new Error(`not supported input name: ${input.name}`);
  }
};

export default function validateFormDatas(form) {
  let isExistInvalidity = false;
  let password;
  const validities = Object.entries(form.elements).reduce((acc, elem) => {
    if (elem[1].tagName === 'BUTTON') return acc;
    const input = elem[1];
    if (input.name === 'password') password = input.value;
    const isValidated = validateInputData(input, password);
    if (!isValidated) isExistInvalidity = true;
    return { ...acc, [input.name]: isValidated };
  }, {});
  return { isExistInvalidity, validities };
}
