const { User } = require('../../db');

async function signup(userInfo) {
  const { id, username } = await User.create({
    ...userInfo,
    isPrivate: false,
    isFacebook: false,
    isDeveloper: false,
    updatedAt: new Date(),
  });

  return { id, username };
}

module.exports = { signup };
