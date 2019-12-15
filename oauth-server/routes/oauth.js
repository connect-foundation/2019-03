const express = require("express");
const passport = require("passport");

const { validateAuthRequest, isAuthenticated } = require("../middlewares");
const { makeUrlWithQueryParams } = require("../lib");

const oauth = express.Router();

oauth.get("/account/signin", (req, res) => {
  const url = makeUrlWithQueryParams("/oauth2/account/signin", req.query);
  res.render("signin.html", { url });
});

oauth.post("/account/signin", (req, res, next) => {
  passport.authenticate("signin", (err, user, info) => {
    if (err) {
      return next(err.original);
    }
    if (!user) {
      return res.status(500).json({ message: info.message });
    }
    req.logIn(user, loginErr => {
      if (loginErr) return next(loginErr);

      const url = makeUrlWithQueryParams("/oauth2/authorize", req.query);
      return res.redirect(url);
    });
  })(req, res, next);
});

oauth.get("/authorize", validateAuthRequest, isAuthenticated, (req, res) => {
  console.log("authorize!");
  res.status(200).json({});
});

oauth.post("/token", (req, res) => {
  res.status(200).json({});
});

module.exports = oauth;
