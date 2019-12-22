const {
  InvalidRequestError,
  InvalidClientError,
  UnsupportedResonseTypeError,
  UnsupportedGrantTypeError
} = require("../error-types");
const { isVSCHAR, isUrl } = require("../validator");
const clientService = require("../services/client-service");
const tokenService = require("../services/token-service");

const ONE_DAY = 86400000; // ms

async function validateAuthRequest(req, res, next) {
  const { response_type, client_id, redirect_uri } = req.query;
  if (!response_type || !client_id || !redirect_uri) {
    return next(
      new InvalidRequestError(
        "the required request parameters are not existed."
      )
    );
  }

  if (response_type !== "code" && response_type !== "token") {
    return next(
      new UnsupportedResonseTypeError('response_type must be "code" or "token"')
    );
  }

  if (!isVSCHAR(client_id)) {
    return next(new InvalidRequestError("Invalid client_id value."));
  }

  const client = await clientService.getClient(client_id);
  if (!client) {
    return next(
      new InvalidClientError('the client who has "client_id" not be existed')
    );
  }

  if (!isUrl(redirect_uri)) {
    return next(new InvalidRequestError("Invalid redirect_uri value."));
  }

  if (client.redirectionURI !== redirect_uri) {
    return next(new InvalidRequestError("redirect_uri is not matched"));
  }

  return next();
}

async function validateTokenRequest(req, res, next) {
  const { grant_type, code, redirect_uri, client_id, client_secret } = req.body;
  if (!grant_type || !code || !redirect_uri || !client_id || !client_secret)
    return next(
      new InvalidRequestError(
        "the required request parameters are not existed."
      )
    );

  if (!isVSCHAR(code)) {
    return next(new InvalidRequestError("Invalid code value."));
  }

  if (grant_type !== "authorization_code" && grant_type !== "refresh_token") {
    return next(
      new UnsupportedGrantTypeError(
        "the grant_type must be 'authorization_code' or 'refresh_token'"
      )
    );
  }

  if (!isVSCHAR(client_id)) {
    return next(new InvalidRequestError("Invalid client_id value."));
  }

  const client = await clientService.getClient(client_id);
  if (!client) {
    return next(
      new InvalidClientError('the client who has "client_id" not be existed.')
    );
  }

  if (!isVSCHAR(client_secret)) {
    return next(new InvalidRequestError("Invalid client_secret value."));
  }

  if (client.clientSecret !== client_secret) {
    return next(new InvalidClientError("the client secret is not matcted."));
  }

  if (!isUrl(redirect_uri)) {
    return next(new InvalidRequestError("Invalid redirect_uri value."));
  }

  if (client.redirectionURI !== redirect_uri) {
    return next(new InvalidRequestError("redirect_uri is not matched."));
  }

  return next();
}

function isAccessTokenExpired({ updatedAt }) {
  const createdTime = +updatedAt;
  const diff = new Date() - createdTime;

  return diff >= ONE_DAY;
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
    if (isAccessTokenExpired(tokenInfo)) {
      return next(new Error("The access token is expired."));
    }
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
