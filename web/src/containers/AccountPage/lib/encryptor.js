import sha256 from 'crypto-js/sha256';
import { getFormData } from '../../../utils';

export default function changeToHashedPassword(form) {
  const plaintextPassword = getFormData(form, 'password');
  const hashedPassword = sha256(plaintextPassword);
  return hashedPassword;
}
