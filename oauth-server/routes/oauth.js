const express = require("express");

const {
  validateAuthRequest,
  validateTokenRequest,
  isAuthenticated,
  authenticate
} = require("../middlewares");
const { makeUrlWithQueryParams } = require("../lib");
const { authCode, implicit } = require("../grant-types");

const oauth = express.Router();

oauth.get("/account/signin", (req, res) => {
  const url = makeUrlWithQueryParams("/oauth2/account/signin", req.query);
  res.render("signin.html", { url });
});

oauth.post("/account/signin", (req, res, next) => {
  authenticate(req, res, next, "signin");
});

oauth.get(
  "/authorize",
  validateAuthRequest,
  isAuthenticated,
  async (req, res, next) => {
    const { response_type } = req.query;

    let path = "";
    if (response_type === "code") {
      path = await authCode.codeHandler(req.query, req.user);
      return res.redirect(path);
    }

    if (response_type === "token") {
      path = await implicit.tokenHandler(req.query, req.user);
      return res.redirect(path);
    }

    return next(
      new UnsupportedResonseTypeError('response_type must be "code" or "token"')
    );
  }
);

oauth.post("/token", validateTokenRequest, async (req, res, next) => {
  let responseBody = null;

  const { grant_type: grantType } = req.body;
  if (grantType === "refresh_token") {
    responseBody = await authCode.refreshAccessToken(req.body);
    return res.status(200).json(responseBody);
  }

  responseBody = await authCode.tokenHandler(req.body);
  return res.status(200).json(responseBody);
});

oauth.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error_name: err.name,
    error_message: err.message
  });
});

module.exports = oauth;
