const passport = require('passport');

const ONE_DAY = 86400000;

const authenticate = (type, req, res, next) => {
  passport.authenticate(type, (err, user, info) => {
    if (err) {
      return next(err.original);
    }
    if (!user) {
      return res.json({ status: 'error', message: 'unauthorized' });
    }

    return req.logIn(user, loginErr => {
      if (loginErr) return next(loginErr);

      const myInfo = {
        id: user.id,
        username: user.username,
        name: user.name,
        email: user.email,
        cellPhone: user.cellPhone,
        profileImage: user.profileImage,
      };
      res.cookie('myInfo', myInfo, { maxAge: ONE_DAY });

      return res.json({ status: 'ok', message: 'authenticated' });
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
