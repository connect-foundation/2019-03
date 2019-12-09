import sha256 from 'crypto-js/sha256';
import validator from 'validator';
import { getFormData, setFormData } from '../../../utils';

export const changeToHashedPassword = form => {
  const plaintextPassword = getFormData(form, 'password');
  const hashedPassword = sha256(plaintextPassword);
  setFormData(form, 'password', hashedPassword);
};

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
  const CELL_PHONE_REGEX = /^\d{3}-\d{3,4}-\d{4}$/;
  return CELL_PHONE_REGEX.test(cellPhone);
};

export const validateInputValues = form => {
  const username = getFormData(form, 'username');
  if (!checkIsUsername(username)) {
    return {
      isValidated: false,
      message:
        '사용자이름은 알파벳, 언더바, 숫자로 이루어진 8~30글자이어야 합니다.',
    };
  }

  const password = getFormData(form, 'password');
  if (!checkIsPassword(password)) {
    return {
      isValidated: false,
      message:
        '비밀번호는 알파벳, 숫자, 특수문자로 이루어진 8~30글자이어야 합니다.',
    };
  }

  const name = getFormData(form, 'name');
  if (!checkIsName(name)) {
    return {
      isValidated: false,
      message: '이름은 30글자 이내여야 합니다.',
    };
  }

  const email = getFormData(form, 'email');
  if (!checkIsEmail(email)) {
    return {
      isValidated: false,
      message: '이메일 형식이 아닙니다. ex) test@test.com',
    };
  }

  const cellPhone = getFormData(form, 'cellPhone');
  if (!checkIsCellPhone(cellPhone)) {
    return {
      isValidated: false,
      message: '휴대폰 번호 형식이 아닙니다. ex) 010-1111-1111',
    };
  }

  return true;
};
