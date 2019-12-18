const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const userService = require("../services/user-service");

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

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  passport.use(
    "signin",
    new LocalStrategy({ passwordField: "enc_password" }, signin)
  );
};
