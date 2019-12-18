/**
 * See https://tools.ietf.org/html/rfc6749#section-5.2
 */
class InvalidGrantError extends Error {
  constructor(...args) {
    super(...args);

    this.name = "invalid_grant";
    this.status = 400;
    this.description = `The provided authorization grant (e.g., authorization
      code, resource owner credentials) or refresh token is
      invalid, expired, revoked, does not match the redirection
      URI used in the authorization request, or was issued to
      another client`;
    this.uri = "";

    Error.captureStackTrace(this, InvalidGrantError);
  }
}

module.exports = InvalidGrantError;
