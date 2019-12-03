class clientError extends Error {
  constructor(message, ...params) {
    super(...params);

    this.message = message;
    this.name = "client_error";
  }
}

module.exports = clientError;
