const { InvalidRequestError, InvalidClientError } = require("../error-types");
const clientService = require("../services/client-service");
const tokenService = require("../services/token-service");

async function validateAuthRequest(req, res, next) {
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
}

async function validateTokenRequest(req, res, next) {
  const { grant_type, code, redirect_uri, client_id, client_secret } = req.body;
  if (!grant_type || !code || !redirect_uri || !client_id || !client_secret)
    return next(new InvalidRequestError());

  if (grant_type !== "authorization_code" && grant_type !== "refresh_token") {
    return next(new InvalidRequestError());
  }

  const client = await clientService.getClient(client_id);
  if (!client) {
    return next(
      new InvalidClientError('the client who has "client_id" not be existed')
    );
  }

  if (client.clientSecret !== client_secret) {
    return next(new InvalidClientError());
  }

  if (client.redirectionURI !== redirect_uri) {
    return next(new InvalidRequestError("redirect_uri is not matched"));
  }

  return next();
}

async function validateAccessToken(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    return next(new Error("The `Authorization` Header must be existed."));
  }

  const [bearer, accessToken] = authorization.split(" ");
  if (bearer !== "Bearer") {
    return next(new Error("The authtoization type must be `Bearer`"));
  }

  try {
    const tokenInfo = await tokenService.getTokenInfoByAccessToken(accessToken);
    // check is expired accessToken
    req.tokenInfo = tokenInfo;
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  validateAuthRequest,
  validateTokenRequest,
  validateAccessToken
};
