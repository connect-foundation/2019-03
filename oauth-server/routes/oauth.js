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
      path = await implicit.codeHandler(req.query, req.user);
      return res.redirect(path);
    }

    return next(new UnsupportedResonseTypeError());
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

module.exports = oauth;
