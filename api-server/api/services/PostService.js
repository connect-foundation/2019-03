const {
  Sequelize,
  User,
  Post,
  UserFollow,
  Comment,
  PostLike,
} = require('../../db');

const { Op } = Sequelize;

async function getFollowingPostList(userId) {
  const followingList = await UserFollow.findAll({
    attributes: ['to'],
    where: { from: userId },
  });

  const postList = await Post.findAll({
    include: {
      model: User,
      attributes: ['id', 'username', 'profileImage'],
      where: {
        id: {
          [Op.in]: followingList.map(f => f.to),
        },
      },
    },
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

async function getTwoComments(postId) {
  const twoComments = await Comment.findAll({
    where: { PostId: postId },
    order: [['updatedAt', 'DESC']],
    limit: 2,
  });

  return twoComments;
}

async function getCommentCount(postId) {
  const commentCount = await Comment.count({ where: { PostId: postId } });
  return commentCount;
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
    order: [['updatedAt', 'ASC']],
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
    order: [['updatedAt', 'ASC']],
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
  getTwoComments,
  getCommentCount,
  getLikerInfo,
  getLikerList,
  setPostLike,
  unsetPostLike,
};