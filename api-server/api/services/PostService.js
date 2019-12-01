const { Sequelize, User, Post, UserFollow, PostLike } = require('../../db');

const { Op } = Sequelize;

async function getFollowingPostList(userId, offset = 0, limit = 10) {
  const result = await UserFollow.findAll({
    attributes: ['to'],
    where: { from: userId },
  });

  const followingList = [userId, ...result.map(f => f.to)];
  const postList = await Post.findAll({
    include: {
      model: User,
      attributes: ['id', 'username', 'profileImage'],
      where: {
        id: {
          [Op.in]: followingList,
        },
      },
    },
    offset,
    limit,
    order: [['updatedAt', 'DESC']],
  });

  return postList;
}

async function checkUserLikePost(userId, postId) {
  const result = await PostLike.findOne({
    attributes: ['id'],
    where: {
      UserId: userId,
      PostId: postId,
    },
  });

  return result !== null;
}

async function getLikerInfo(postId) {
  const { rows, count } = await PostLike.findAndCountAll({
    attributes: ['id', 'updatedAt'],
    include: [
      {
        model: User,
        attributes: ['username', 'profileImage'],
      },
    ],
    where: { PostId: postId },
    order: [['updatedAt', 'DESC']],
  });

  let likerInfo = {
    username: '',
    profileImage: '',
    likerCount: count,
  };

  if (rows.length > 0) {
    const { username, profileImage } = rows[0].User;
    likerInfo = { ...likerInfo, username, profileImage };
  }

  return likerInfo;
}

async function getLikerList(postId) {
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
}

async function setPostLike(userId, postId) {
  await PostLike.create({
    UserId: userId,
    PostId: postId,
    updatedAt: new Date(),
  });
}

async function unsetPostLike(userId, postId) {
  await PostLike.destroy({
    where: { PostId: postId, UserId: userId },
  });
}

module.exports = {
  getFollowingPostList,
  checkUserLikePost,
  getLikerInfo,
  getLikerList,
  setPostLike,
  unsetPostLike,
};
