const { makeUrlWithQueryParams } = require("../lib");

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  const url = makeUrlWithQueryParams("/oauth2/account/signin", req.query);
  return res.redirect(url);
}

module.exports = { isAuthenticated };
