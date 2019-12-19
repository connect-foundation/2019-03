const { Comment, CommentLike, Log } = require('../../db');
const { errorName } = require('../../error');

const getCommentList = async (postId, offset, limit) => {
  try {
    const commentList = await Comment.findAll({
      where: { PostId: postId },
      offset,
      limit,
      order: [['updatedAt', 'DESC']],
    });
    return commentList;
  } catch (err) {
    throw new Error(errorName.COMMENT_QUERY_ERROR);
  }
};

const getTwoComments = async postId => {
  try {
    const twoComments = await Comment.findAll({
      where: { PostId: postId },
      order: [['updatedAt', 'DESC']],
      limit: 2,
    });
    return twoComments;
  } catch (err) {
    throw new Error(errorName.COMMENT_QUERY_ERROR);
  }
};

const getCommentCount = async postId => {
  try {
    const commentCount = await Comment.count({ where: { PostId: postId } });
    return commentCount;
  } catch (err) {
    throw new Error(errorName.COMMENT_QUERY_ERROR);
  }
};

const checkUserLikeComment = async (userId, commentId) => {
  try {
    const result = await CommentLike.findOne({
      attributes: ['id'],
      where: {
        UserId: userId,
        CommentId: commentId,
      },
    });
    return result !== null;
  } catch (err) {
    throw new Error(errorName.COMMENT_QUERY_ERROR);
  }
};

const setCommentLike = async (userId, commentId) => {
  try {
    await CommentLike.create({
      UserId: userId,
      CommentId: commentId,
      updatedAt: new Date(),
    });
  } catch (err) {
    throw new Error(errorName.COMMENT_QUERY_ERROR);
  }
};

const unsetCommentLike = async (userId, commentId) => {
  try {
    await CommentLike.destroy({
      where: { UserId: userId, CommentId: commentId },
    });
  } catch (err) {
    throw new Error(errorName.COMMENT_QUERY_ERROR);
  }
};

const insertComment = async ({ content, depth, WriterId, PostId, UserId }) => {
  if (WriterId !== UserId) {
    await Log.create({
      From: UserId,
      To: WriterId,
      PostId,
      status: 'comment',
      updatedAt: new Date(),
    });
  }

  return Comment.create({
    content,
    depth,
    PostId,
    UserId,
    updatedAt: new Date(),
  });
};

module.exports = {
  getCommentList,
  getTwoComments,
  getCommentCount,
  setCommentLike,
  unsetCommentLike,
  checkUserLikeComment,
  insertComment,
};
