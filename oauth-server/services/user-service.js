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

module.exports = { signin };
