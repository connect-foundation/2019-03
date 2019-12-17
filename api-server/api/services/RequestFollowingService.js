const { UserFollow, Log } = require('../../db');

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
  const userFollower = await insertFollow(myId, userId);
  await insertFollowLog(myId, userId);
  return userFollower;
};

module.exports = { createFollowData };
