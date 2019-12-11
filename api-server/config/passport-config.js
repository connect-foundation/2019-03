const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userService = require('../api/services/UserService');

const signup = async (req, username, password, done) => {
  try {
    const user = await userService.signup(req.body);
    if (!user) return done(null, false);
    return done(null, user);
  } catch (err) {
    return done(err);
  }
};

const signin = async (username, password, done) => {
  try {
    const user = await userService.signin(username, password);
    if (!user) return done(null, false);
    return done(null, user);
  } catch (err) {
    return done(err);
  }
};

module.exports = app => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    'signup',
    new LocalStrategy({ passReqToCallback: true }, signup),
  );

  passport.use('signin', new LocalStrategy(signin));

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};
