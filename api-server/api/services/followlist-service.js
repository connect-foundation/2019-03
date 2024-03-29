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

const getFollowDataList = async (followIdList, { limit, cursor }) => {
  try {
    const followDataList = await User.findAll({
      attributes: ['id', 'username', 'name', 'profileImage', 'updatedAt'],
      where: {
        id: { [Op.in]: followIdList },
        updatedAt: { [Op.lt]: new Date(+cursor) },
      },
      limit,
      order: [['updatedAt', 'DESC']],
    });
    return followDataList;
  } catch (err) {
    throw new Error(errorName.FOLLOW_QUERY_ERROR);
  }
};

const getFollowUpdatedDataList = async (followDataList, { myId }) => {
  try {
    const followIds = followDataList.map(
      followData => followData.dataValues.id,
    );
    const followStatus = await UserFollow.findAll({
      attributes: ['status', 'to'],
      where: {
        from: myId,
        to: { [Op.in]: followIds },
      },
    });
    const followUpdatedDataList = followDataList.map(followData => {
      const isFollow = followStatus.find(
        status => status.dataValues.to === followData.dataValues.id,
      );
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
