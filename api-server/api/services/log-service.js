const { User, UserFollow, Log } = require('../../db');
const { errorName } = require('../../error');

const getLogs = id => {
  try {
    return Log.findAll({
      attributes: ['id', 'status', 'From', 'To', 'PostId'],
      where: { to: id },
      order: [['updatedAt', 'DESC']],
    });
  } catch (err) {
    throw new Error(errorName.LOGS_QUERY_ERROR);
  }
};

const getFollowStatusUserInfo = log => {
  try {
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
  } catch (err) {
    throw new Error(errorName.LOG_QUERY_ERROR);
  }
};

const getOtherStatusUserInfo = log => {
  try {
    return User.findOne({
      attributes: ['id', 'username', 'profileImage'],
      where: { id: log.From },
    });
  } catch (err) {
    throw new Error(errorName.LOG_QUERY_ERROR);
  }
};

module.exports = { getLogs, getFollowStatusUserInfo, getOtherStatusUserInfo };
