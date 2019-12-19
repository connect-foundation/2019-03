const {
  Sequelize: { Op },
  UserFollow,
  User,
} = require('../../db');
const { errorName } = require('../../error');

const getFollowerList = async ({ userId }) => {
  try {
    const followerList = await UserFollow.findAll({
      attributes: ['from'],
      where: { to: userId },
      order: [['updatedAt', 'DESC']],
    });
    return followerList;
  } catch (err) {
    throw new Error(errorName.FOLLOWER_QUERY_ERROR);
  }
};

const getFollowList = async ({ userId }) => {
  try {
    const followList = await UserFollow.findAll({
      attributes: ['to'],
      where: { from: userId },
      order: [['updatedAt', 'DESC']],
    });
    return followList;
  } catch (err) {
    throw new Error(errorName.FOLLOW_QUERY_ERROR);
  }
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
  try {
    const followDataList = await User.findAll({
      attributes: ['id', 'username', 'name', 'profileImage'],
      where: {
        id: {
          [Op.in]: followIdList,
        },
      },
    });
    return followDataList;
  } catch (err) {
    throw new Error(errorName.FOLLOW_QUERY_ERROR);
  }
};

const getFollowUpdatedDataList = async (followDataList, { myId }) => {
  try {
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
  } catch (err) {
    throw new Error(errorName.FOLLOW_QUERY_ERROR);
  }
};

module.exports = {
  getFollowerList,
  getFollowList,
  getFollowerIdList,
  getFollowIdList,
  getFollowDataList,
  getFollowUpdatedDataList,
};
