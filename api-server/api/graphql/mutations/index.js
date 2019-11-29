const { createComment } = require('./CommentMutation');
const { createPostLike, deletePostLike } = require('./PostLikeMutation');
const {
  createCommentLike,
  deleteCommentLike,
} = require('./CommentLikeMutation');

module.exports = {
  createComment,
  createPostLike,
  deletePostLike,
  createCommentLike,
  deleteCommentLike,
};
