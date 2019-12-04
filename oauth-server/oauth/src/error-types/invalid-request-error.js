/**
 * See https://tools.ietf.org/html/rfc6749#section-4.1.2.1
 */
class InvalidRequestError extends Error {
  constructor(...args) {
    super(...args);

    this.name = "invalid_request";
    this.status = 400;
    this.description = `The request is missing a required parameter, includes an
    invalid parameter value, includes a parameter more than
    once, or is otherwise malformed`;
    this.uri = "";

    Error.captureStackTrace(this, InvalidRequestError);
  }
}

module.exports = InvalidRequestError;
