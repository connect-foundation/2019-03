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

  if (!user) return null;

  const isSame = await bcrypt.compare(plaintextPassword, user.password);
  if (!isSame) return null;

  return user;
}

const updateProfileImage = (imageFile, userId) => {
  const target = { profileImage: imageFile.Location };
  return User.update(target, {
    where: {
      id: userId,
    },
  });
};
module.exports = { signup, signin, updateProfileImage };
