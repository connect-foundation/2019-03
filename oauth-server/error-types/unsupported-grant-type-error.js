/**
 * See https://tools.ietf.org/html/rfc6749#section-5.2
 */
class UnsupportedGrantTypeError extends Error {
  constructor(...args) {
    super(...args);

    this.name = "unsupported_grant_type";
    this.status = 400;
    this.description = `The authorization grant type is not supported by the
    authorization server.`;
    this.uri = "";

    Error.captureStackTrace(this, UnsupportedGrantTypeError);
  }
}

module.exports = UnsupportedGrantTypeError;
