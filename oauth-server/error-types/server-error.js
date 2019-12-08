/**
 * See https://tools.ietf.org/html/rfc6749#section-4.1.2.1
 */
class ServerError extends Error {
  constructor(...args) {
    super(...args);

    this.name = "server_error";
    this.status = 500;
    this.description = `The authorization server encountered an unexpected
    condition that prevented it from fulfilling the request.`;
    this.uri = "";

    Error.captureStackTrace(this, ServerError);
  }
}

module.exports = ServerError;
