import validator from 'validator';

const checkIsUsername = username => {
  const USERNAME_REGEX = /^\w{8,30}$/;
  return USERNAME_REGEX.test(username);
};

const checkIsPassword = password => {
  const PASSWORD_REGEX = /^[\w\W]{8,30}$/;
  return PASSWORD_REGEX.test(password);
};

const checkIsName = name => {
  return validator.isLength(name, { min: 1, max: 30 });
};

const checkIsEmail = email => {
  return validator.isEmail(email);
};

const checkIsCellPhone = cellPhone => {
  const CELL_PHONE_REGEX = /^\d{10,11}$/;
  return CELL_PHONE_REGEX.test(cellPhone);
};

const validateInputData = input => {
  switch (input.name) {
    case 'username':
      return checkIsUsername(input.value);
    case 'password':
      return checkIsPassword(input.value);
    case 'name':
      return checkIsName(input.value);
    case 'email':
      return checkIsEmail(input.value);
    case 'cellPhone':
      return checkIsCellPhone(input.value);
    default:
      throw new Error(`not supported input name: ${input.name}`);
  }
};

export default function validateFormDatas(form) {
  let isExistInvalidity = false;

  const validities = Object.entries(form.elements).reduce((acc, elem) => {
    if (elem[1].tagName === 'BUTTON') return acc;

    const input = elem[1];
    const isValidated = validateInputData(input);
    if (!isValidated) isExistInvalidity = true;
    return { ...acc, [input.name]: isValidated };
  }, {});

  return { isExistInvalidity, validities };
}
