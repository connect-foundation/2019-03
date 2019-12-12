const { User, UserFollow } = require('../../db');

const getFollowStatusUserInfo = log => {
  return User.findOne({
    attributes: ['id', 'username', 'profileImage'],
    include: [
      {
        model: UserFollow,
        attributes: ['status'],
        where: { from: log.To },
      },
    ],
    where: { id: log.From },
  });
};

const getOtherStatusUserInfo = log => {
  return User.findOne({
    attributes: ['id', 'username', 'profileImage'],
    where: { id: log.From },
  });
};

module.exports = { getFollowStatusUserInfo, getOtherStatusUserInfo };
