/**
 * See https://tools.ietf.org/html/rfc6749#section-4.1.2.1
 */
class AccessDeniedError extends Error {
  constructor(...args) {
    super(...args);

    this.name = "access_denied";
    this.status = 400;
    this.description = `The resource owner or authorization server denied the
    request.`;
    this.uri = "";

    Error.captureStackTrace(this, AccessDeniedError);
  }
}

module.exports = AccessDeniedError;
