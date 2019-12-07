const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userService = require('../services/UserService');

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await userService.signin(username, password);
      if (!user) return done(null, false);
      return done(null, user);
    } catch (err) {
      done(err);
    }
  }),
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  return res.redirect('/account/login');
};

module.exports = { isAuthenticated };
