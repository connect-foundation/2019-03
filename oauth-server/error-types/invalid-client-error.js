/**
 * See https://tools.ietf.org/html/rfc6749#section-5.2
 */
class InvalidClientError extends Error {
  constructor(...args) {
    super(...args);

    this.name = "invalid_client";
    this.status = 401;
    this.description = `Client authentication failed (e.g., unknown client, no
      client authentication included, or unsupported
      authentication method).`;
    this.uri = "";

    Error.captureStackTrace(this, InvalidClientError);
  }
}

module.exports = InvalidClientError;
