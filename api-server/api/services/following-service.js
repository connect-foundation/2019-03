const { UserFollow, Log } = require('../../db');
const { errorName } = require('../../error');

const insertFollow = async (myId, userId) => {
  const userFollower = await UserFollow.create({
    from: myId,
    to: userId,
    status: 0,
  });
  return userFollower;
};

const insertFollowLog = async (myId, userId) => {
  await Log.create({
    From: myId,
    To: userId,
    status: 'follow',
  });
};

const createFollowData = async ({ myId, userId }) => {
  try {
    const userFollower = await insertFollow(myId, userId);
    await insertFollowLog(myId, userId);
    return userFollower;
  } catch (err) {
    throw new Error(errorName.FOLLOW_INSERT_ERROR);
  }
};

const deleteFollow = async (myId, userId) => {
  const userFollowerCancellation = await UserFollow.destroy({
    where: {
      from: myId,
      to: userId,
    },
  });
  return userFollowerCancellation;
};

const deleteFollowLog = (myId, userId) => {
  Log.destroy({
    where: {
      From: myId,
      To: userId,
      status: 'follow',
    },
  });
};

const destroyFollowCancellationData = async ({ myId, userId }) => {
  try {
    const userFollowerCancellation = await deleteFollow(myId, userId);
    await deleteFollowLog(myId, userId);
    return userFollowerCancellation;
  } catch (err) {
    throw new Error(errorName.FOLLOW_DELETE_ERROR);
  }
};

module.exports = { destroyFollowCancellationData, createFollowData };
