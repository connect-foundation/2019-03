const { UserFollow, Log } = require('../../db');

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
  const userFollowerCancellation = await deleteFollow(myId, userId);
  await deleteFollowLog(myId, userId);
  return userFollowerCancellation;
};

module.exports = { destroyFollowCancellationData };
