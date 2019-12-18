const passport = require("passport");

const { makeUrlWithQueryParams } = require("../lib");

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  const url = makeUrlWithQueryParams("/oauth2/account/signin", req.query);
  return res.redirect(url);
}

function authenticate(req, res, next, type) {
  passport.authenticate(type, (err, user, info) => {
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
}

module.exports = { isAuthenticated, authenticate };
