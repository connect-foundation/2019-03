const { createComment } = require('./CommentMutation');
const { createPostLike, deletePostLike } = require('./PostLikeMutation');
const { deletePost } = require('./PostMutation');
const {
  createCommentLike,
  deleteCommentLike,
} = require('./CommentLikeMutation');

module.exports = {
  deletePost,
  createComment,
  createPostLike,
  deletePostLike,
  createCommentLike,
  deleteCommentLike,
};
