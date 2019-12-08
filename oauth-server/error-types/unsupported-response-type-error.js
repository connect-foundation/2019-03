/**
 * See https://tools.ietf.org/html/rfc6749#section-4.1.2.1
 */
class UnsupportedResonseTypeError extends Error {
  constructor(...args) {
    super(...args);

    this.name = "unsupported_response_type";
    this.status = 400;
    this.description = `The authorization server does not support obtaining an
  authorization code using this method.`;
    this.uri = "";

    Error.captureStackTrace(this, UnsupportedResonseTypeError);
  }
}

module.exports = UnsupportedResonseTypeError;
