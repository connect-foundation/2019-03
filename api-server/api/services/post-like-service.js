const { User, PostLike, Log } = require('../../db');
const { errorName } = require('../../error');

async function checkUserLikePost(userId, postId) {
  try {
    const result = await PostLike.findOne({
      attributes: ['id'],
      where: {
        UserId: userId,
        PostId: postId,
      },
    });
    return result !== null;
  } catch (err) {
    throw new Error(errorName.POST_LIKE_ERROR);
  }
}

async function getLikerInfo(postId) {
  try {
    const { rows, count } = await PostLike.findAndCountAll({
      attributes: ['id', 'updatedAt', 'UserId'],
      where: { PostId: postId },
      order: [['updatedAt', 'DESC']],
    });

    let likerInfo = {
      username: '',
      profileImage: '',
      likerCount: count,
    };

    if (rows.length === 0) return likerInfo;
    const { username, profileImage } = await User.findOne({
      attributes: ['username', 'profileImage'],
      where: { id: rows[0].UserId },
    });
    likerInfo = { ...likerInfo, username, profileImage };

    return likerInfo;
  } catch (err) {
    throw new Error(errorName.POST_LIKE_ERROR);
  }
}

async function getLikerList(postId) {
  try {
    const likerList = await PostLike.findAll({
      attributes: ['id'],
      where: { PostId: postId },
      include: {
        model: User,
        attributes: ['username', 'name', 'profileImage'],
      },
      order: [['updatedAt', 'DESC']],
    });

    return likerList;
  } catch (err) {
    throw new Error(errorName.POST_LIKE_ERROR);
  }
}

async function setPostLike(userId, writerId, postId) {
  try {
    await PostLike.create({
      UserId: userId,
      PostId: postId,
      updatedAt: new Date(),
    });

    if (userId !== writerId) {
      await Log.create({
        From: userId,
        To: writerId,
        PostId: postId,
        status: 'like',
        updatedAt: new Date(),
      });
    }
  } catch (err) {
    throw new Error(errorName.POST_LIKE_ERROR);
  }
}

async function unsetPostLike(userId, postId) {
  try {
    await PostLike.destroy({
      where: { PostId: postId, UserId: userId },
    });
  } catch (err) {
    throw new Error(errorName.POST_LIKE_ERROR);
  }
}

module.exports = {
  checkUserLikePost,
  getLikerInfo,
  setPostLike,
  unsetPostLike,
  getLikerList,
};
