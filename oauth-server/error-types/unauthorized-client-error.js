/**
 * See https://tools.ietf.org/html/rfc6749#section-4.1.2.1
 */
class UnauthorizedClientError extends Error {
  constructor(...args) {
    super(...args);

    this.name = "unauthorized_client";
    this.status = 400;
    this.description = `The client is not authorized to request an authorization
    code using this method.`;
    this.uri = "";

    Error.captureStackTrace(this, UnauthorizedClientError);
  }
}

module.exports = UnauthorizedClientError;
