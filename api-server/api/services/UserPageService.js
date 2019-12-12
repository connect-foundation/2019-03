const { Post, User, UserFollow } = require('../../db');

const getUserInfo = async username => {
  const userInfo = await User.findOne({
    attributes: ['name', 'id'],
    where: { username },
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
  const { username, myId } = args;
  let userInfo = await getUserInfo(username);
  const isExistingUser = !!userInfo;
  let postCard = [];
  if (isExistingUser) {
    const userId = userInfo.id;
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
