const { InvalidRequestError, InvalidClientError } = require("../error-types");
const clientService = require("../services/client-service");

const validateAuthRequest = async (req, res, next) => {
  const { response_type, client_id, redirect_uri } = req.query;

  if (response_type !== "code" && response_type !== "token") {
    return next(
      new InvalidRequestError('response_type must be "code" or "token"')
    );
  }

  const client = await clientService.getClient(client_id);
  if (!client) {
    return next(
      new InvalidClientError('the client who has "client_id" not be existed')
    );
  }

  if (client.redirectionURI !== redirect_uri) {
    return next(new InvalidRequestError("redirect_uri is not matched"));
  }

  return next();
};

const tokenRequestValidate = (req, res, next) => {
  console.log("aaaaaaaaaaa");

  // const { grant_type, code, redirect_uri, client_id, client_secret } = req.body;
  // if (!grant_type || !code || !redirect_uri || !client_id || !client_secret)
  //   return next(new InvalidRequestError());

  // if (grant_type === "authorization_code") {
  //   return next(new InvalidRequestError());
  // }

  // const client = { redirectionUri: redirect_uri, clientSecret: client_secret };
  // if (!client) {
  //   return next(
  //     new InvalidClientError('the client who has "client_id" not be existed')
  //   );
  // }

  // if (client.clientSecret !== client_secret) {
  //   return next(new InvalidClientError());
  // }

  // if (client.redirectionUri !== redirect_uri) {
  //   return next(new InvalidRequestError("redirect_uri is not matched"));
  // }

  return next();
};

module.exports = { validateAuthRequest, tokenRequestValidate };
