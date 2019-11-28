const { Comment, CommentLike } = require('../../db');

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

async function checkUserLikeComment(userId, commentId) {
  const result = await CommentLike.findOne({
    attributes: ['id'],
    where: {
      UserId: userId,
      CommentId: commentId,
    },
  });

  return result !== null;
}

async function setCommentLike(userId, commentId) {
  await CommentLike.create({
    UserId: userId,
    CommentId: commentId,
    updatedAt: new Date(),
  });
}

async function unsetCommentLike(userId, commentId) {
  await CommentLike.destroy({
    where: { UserId: userId, CommentId: commentId },
  });
}

module.exports = {
  getTwoComments,
  getCommentCount,
  setCommentLike,
  unsetCommentLike,
  checkUserLikeComment,
};
