const { User } = require('../../db');
const bcrypt = require('../../utils/bcrypt');
const { errorName } = require('../../error');
const { uploadImageFileToS3 } = require('../../utils/upload');

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

const updateUserProfile = (userId, target) => {
  try {
    return User.update(target, {
      where: {
        userId,
      },
    });
  } catch (err) {
    throw new Error(errorName.USER_PROFILE_UPDATE_ERROR);
  }
};

const updateProfileImage = async (file, userId) => {
  try {
    const imageFile = await uploadImageFileToS3(file, 'user');
    const target = { profileImage: imageFile.Location };
    await User.update(target, {
      where: {
        id: userId,
      },
    });
    return imageFile;
  } catch (err) {
    throw new Error(errorName.PROFILE_IMAGE_UPDATE_ERROR);
  }
};
module.exports = { signup, signin, updateUserProfile, updateProfileImage };
