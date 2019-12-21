const { PostLike } = require('../../db');
const { errorName } = require('../../error');

const getLikerList = async ({ PostId }) => {
  try {
    const likerList = await PostLike.findAll({
      attributes: ['UserId'],
      where: { PostId },
      order: [['updatedAt', 'DESC']],
    });
    return likerList;
  } catch (err) {
    throw new Error(errorName.RANDOM_QUERY_ERROR);
  }
};

const getLikerIdList = likerList =>
  likerList.map(liker => {
    const likerUserId = liker.dataValues.UserId;
    return likerUserId;
  });

module.exports = { getLikerList, getLikerIdList };
