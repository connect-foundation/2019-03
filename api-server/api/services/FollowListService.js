const {
  Sequelize: { Op },
  UserFollow,
  User,
} = require('../../db');

const getFollowerList = async ({ userId }) => {
  const followerList = await UserFollow.findAll({
    attributes: ['from'],
    where: { to: userId },
    order: [['updatedAt', 'DESC']],
  });
  return followerList;
};

const getFollowList = async ({ userId }) => {
  const followList = await UserFollow.findAll({
    attributes: ['to'],
    where: { from: userId },
    order: [['updatedAt', 'DESC']],
  });
  return followList;
};

const getFollowerIdList = followerList =>
  followerList.map(follower => {
    const followerId = follower.dataValues.from;
    return followerId;
  });

const getFollowIdList = followList =>
  followList.map(follow => {
    const followId = follow.dataValues.to;
    return followId;
  });

const getFollowDataList = async followIdList => {
  const followDataList = await User.findAll({
    attributes: ['id', 'username', 'name', 'profileImage'],
    where: {
      id: {
        [Op.in]: followIdList,
      },
    },
  });
  return followDataList;
};

const getFollowUpdatedDataList = async (followDataList, { myId }) => {
  const followUpdatedDataList = await followDataList.map(async followData => {
    const isFollow = await UserFollow.findOne({
      attributes: ['status'],
      where: {
        from: myId,
        to: followData.dataValues.id,
      },
    });
    return {
      ...followData.dataValues,
      isFollow: isFollow ? isFollow.dataValues.status : null,
    };
  });
  return followUpdatedDataList;
};

module.exports = {
  getFollowerList,
  getFollowList,
  getFollowerIdList,
  getFollowIdList,
  getFollowDataList,
  getFollowUpdatedDataList,
};
