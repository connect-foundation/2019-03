const urlRegex = require("url-regex");

const VSCAHR = /^[\u0020-\u007E]+$/;
const NQCHAR = /^[\u0021|\u0023-\u005B|\u005D-\u007E]+$/;
const NQSCHAR = /^[\u0020-\u0021|\u0023-\u005B|\u005D-\u007E]+$/;
const UNICODECHARNOCRLF = /^[\u0009|\u0020-\u007E|\u0080-\uD7FF|\uE000-\uFFFD|\u10000-\u10FFFF]+$/;

class Validator {
  constructor() {}

  isVSCHAR(value) {
    return VSCAHR.test(value);
  }

  isNQCHAR(value) {
    return NQCHAR.test(value);
  }

  isNQSCHAR(value) {
    return NQSCHAR.test(value);
  }

  isUNICODECHARNOCRLF(value) {
    return UNICODECHARNOCRLF.test(value);
  }

  isUrl(value) {
    return urlRegex({ exact: true }).test(value);
  }
}

module.exports = Validator;
