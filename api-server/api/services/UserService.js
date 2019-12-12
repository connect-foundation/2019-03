const { User } = require('../../db');
const bcrypt = require('../../utils/bcrypt');

async function signup(userInfo) {
  const user = await User.create({
    ...userInfo,
    isPrivate: false,
    isFacebook: false,
    isDeveloper: false,
    updatedAt: new Date(),
  });

  return user;
}

async function signin(_username, plaintextPassword) {
  const { id, username, password, name } = await User.findOne({
    attributes: ['id', 'username', 'password', 'name'],
    where: { username: _username },
  });

  const isSame = await bcrypt.compare(plaintextPassword, password);
  if (!isSame) return null;

  return { id, username, name };
}

module.exports = { signup, signin };
