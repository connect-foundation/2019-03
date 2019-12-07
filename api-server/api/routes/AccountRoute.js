const Router = require('express');
const passport = require('passport');

const userService = require('../services/UserService');

const account = new Router();

account.post('/signup', async (req, res, next) => {
  try {
    const { id, username } = await userService.signup(req.body);
    res.cookie('myInfo', { id, username });
    res.status(200).json();
  } catch (err) {
    next(err.original);
  }
});

account.get('/login', (req, res) => {
  res.status(200).json();
});

account.post(
  '/login',
  passport.authenticate('local', {
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
