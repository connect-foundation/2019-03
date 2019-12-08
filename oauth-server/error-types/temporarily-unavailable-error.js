/**
 * See https://tools.ietf.org/html/rfc6749#section-4.1.2.1
 */
class TempUnavailableError extends Error {
  constructor(...args) {
    super(...args);

    this.name = "temporarily_unavailable";
    this.status = 503;
    this.description = `The authorization server is currently unable to handle
    the request due to a temporary overloading or maintenance
    of the server.`;
    this.uri = "";

    Error.captureStackTrace(this, TempUnavailableError);
  }
}

module.exports = TempUnavailableError;
