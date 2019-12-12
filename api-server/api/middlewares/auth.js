const passport = require('passport');

const ONE_DAY = 86400;

const authenticate = (type, req, res, next) => {
  passport.authenticate(type, (err, user, info) => {
    if (err) {
      return next(err.original);
    }
    if (!user) {
      return res.status(500).json({ message: info.message });
    }

    return req.logIn(user, loginErr => {
      if (loginErr) return next(loginErr);

      const myInfo = { id: user.id, username: user.username };
      res.cookie('myInfo', myInfo, { maxAge: ONE_DAY });

      return res.status(200).json({ status: 'ok', message: 'authenticated' });
    });
  })(req, res, next);
};

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.status(403).json({});
};

module.exports = { authenticate, isAuthenticated };
