const Router = require('express');
const passport = require('passport');

const account = new Router();

account.post('/signup', (req, res, next) => {
  passport.authenticate('signup', (err, user, info) => {
    if (err) {
      return next(err.original);
    }
    if (!user) {
      return res.status(500).json({ message: info.message });
    }

    const myInfo = { id: user.id, username: user.username };
    res.set('Access-Control-Allow-Credentials', true);
    res.set('Access-Control-Allow-Origin', process.env.WEB_URL);
    res.cookie('myInfo', myInfo);

    return res.status(200).json({ status: 'success' });
  })(req, res, next);
});

account.get('/login', (req, res) => {
  res.status(200).json();
});

account.post(
  '/login',
  passport.authenticate('signin', {
    failureRedirect: '/account/login',
  }),
  (req, res) => {
    res.status(200).json({ message: 'Login success' });
  },
);

account.use((err, req, res, next) => {
  if (err.code === 'ER_DUP_ENTRY') {
    res.status(400).json({ error: 'Duplicated username' });
    return;
  }
  res.status(400);
});

module.exports = account;
