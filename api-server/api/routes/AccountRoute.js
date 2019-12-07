const Router = require('express');

const account = new Router();
const userService = require('../services/UserService');

account.post('/signup', async (req, res, next) => {
  try {
    const { id, username } = await userService.signup(req.body);
    res.cookie('myInfo', { id, username });
    res.status(200).json();
  } catch (err) {
    next(err.original);
  }
});

account.use((err, req, res, next) => {
  if (err.code === 'ER_DUP_ENTRY') {
    res.status(400).json({ error: 'Duplicated username' });
    return;
  }
  res.status(400);
});

module.exports = account;
