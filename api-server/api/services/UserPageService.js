const { Post, User } = require('../../db');

const getUserCount = async args => {
  const userCount = await User.count({ where: { username: args.writer } });
  return userCount;
};

const getPostCard = async args => {
  const postCard = await Post.findAll({
    include: [
      {
        model: User,
        where: { username: args.writer },
      },
    ],
  });
  return postCard;
};

const getUserPageData = async args => {
  const userCount = await getUserCount(args);
  const isExistingUser = !!userCount;
  let postCard = [];
  if (isExistingUser) postCard = await getPostCard(args);
  const data = { isExistingUser, postCard };
  return data;
};

module.exports = { getUserPageData };
