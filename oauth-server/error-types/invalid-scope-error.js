/**
 * See https://tools.ietf.org/html/rfc6749#section-4.1.2.1
 */
class InvalidScopeError extends Error {
  constructor(...args) {
    super(...args);

    this.name = "invalid_scope";
    this.status = 400;
    this.description = `The requested scope is invalid, unknown, or malformed.`;
    this.uri = "";

    Error.captureStackTrace(this, InvalidScopeError);
  }
}

module.exports = InvalidScopeError;
