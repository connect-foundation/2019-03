const { createComment } = require('./CommentMutation');
const { createPostLike, deletePostLike } = require('./PostLikeMutation');
const { deletePost, updatePost } = require('./PostMutation');
const {
  createCommentLike,
  deleteCommentLike,
} = require('./CommentLikeMutation');

module.exports = {
  deletePost,
  updatePost,
  createComment,
  createPostLike,
  deletePostLike,
  createCommentLike,
  deleteCommentLike,
};
