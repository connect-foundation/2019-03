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
  const user = await User.findOne({
    where: { username: _username },
  });

  const isSame = await bcrypt.compare(plaintextPassword, user.password);
  if (!isSame) return null;

  return user;
}

module.exports = { signup, signin };
