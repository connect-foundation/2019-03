const InvalidRequestError = require("./invalid-request-error");
const UnauthorizedClientError = require("./unauthorized-client-error");
const AccessDeniedError = require("./access-denied-error");
const UnsupportedResonseTypeError = require("./unsupported-response-type-error");
const InvalidScopeError = require("./invalid-scope-error");
const ServerError = require("./server-error");
const TempUnavailableError = require("./temporarily-unavailable-error");
const InvalidClientError = require("./invalid-client-error");
const InvalidGrantError = require("./invalid_grant_error");

module.exports = {
  InvalidRequestError,
  UnauthorizedClientError,
  AccessDeniedError,
  UnsupportedResonseTypeError,
  InvalidScopeError,
  ServerError,
  TempUnavailableError,
  InvalidClientError,
  InvalidGrantError
};
