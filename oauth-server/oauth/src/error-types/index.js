const InvalidRequestError = require("./invalid-request-error");
const UnauthorizedClientError = require("./unauthorized-client-error");
const AccessDeniedError = require("./access-denied-error");
const UnsupportedResonseTypeError = require("./unsupported-response-type-error");
const InvalidScopeError = require("./invalid-scope-error");

module.exports = {
  InvalidRequestError,
  UnauthorizedClientError,
  AccessDeniedError,
  UnsupportedResonseTypeError,
  InvalidScopeError
};
