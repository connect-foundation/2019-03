const { Post, User, UserFollow } = require('../../db');

// const getUserCount = async args => {
//   const userCount = await User.count({ where: { username: args.writer } });
//   return userCount;
// };

const getUserInfo = async writer => {
  const userInfo = await User.findOne({
    attributes: ['name', 'id'],
    where: { username: writer },
  });
  return userInfo;
};

const checkFollowing = async (userId, myId) => {
  const isFollowing = await UserFollow.count({
    where: {
      from: myId,
      to: userId,
    },
  });
  return !!isFollowing;
};

const getFollowersNum = async userId => {
  const followers = await UserFollow.count({
    where: { to: userId },
  });
  return followers;
};

const getFollowsNum = async userId => {
  const follows = await UserFollow.count({
    where: { from: userId },
  });
  return follows;
};

const getPostCard = async userId => {
  const postCard = await Post.findAll({
    where: { UserId: userId },
  });
  return postCard;
};

const getUserPageData = async args => {
  const { writer, myId } = args;
  let userInfo = await getUserInfo(writer);
  //   const userCount = await getUserCount(args);
  const isExistingUser = !!userInfo;
  let postCard = [];
  if (isExistingUser) {
    const userId = userInfo.id;
    // delete userId.id;
    const isFollowing = await checkFollowing(userId, myId);
    const followersNum = await getFollowersNum(userId);
    const followsNum = await getFollowsNum(userId);
    postCard = await getPostCard(userId);
    userInfo = {
      ...userInfo.dataValues,
      isFollowing,
      postNumber: postCard.length,
      followersNum,
      followsNum,
    };
  }
  const data = { isExistingUser, userInfo, postCard };
  return data;
};

module.exports = { getUserPageData };
