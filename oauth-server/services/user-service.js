const { User } = require("../db");
const bcrypt = require("../lib");

async function signin(username, password) {
  const user = await User.findOne({
    where: { username: username }
  });
  if (!user) return null;

  const isSame = await bcrypt.compare(password, user.password);
  if (!isSame) return null;

  return user;
}

async function getUserProfile(username) {
  const profile = await User.findOne({
    attributes: ["id", "username", "name", "email", "profileImage"],
    where: { username }
  });

  if (!profile) {
    throw Error("The user who has username is not existed.");
  }

  return profile;
}

module.exports = { signin, getUserProfile };
