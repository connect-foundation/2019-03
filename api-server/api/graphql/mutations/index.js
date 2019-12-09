const { createComment } = require('./CommentMutation');
const { createPostLike, deletePostLike } = require('./PostLikeMutation');
const { deletePost, updatePost } = require('./PostMutation');
const {
  createCommentLike,
  deleteCommentLike,
} = require('./CommentLikeMutation');
const { RequestFollowing } = require('./RequestFollowing');
const {
  RequestFollowingCancellation,
} = require('./RequestFollowingCancellation');

module.exports = {
  deletePost,
  updatePost,
  createComment,
  createPostLike,
  deletePostLike,
  createCommentLike,
  deleteCommentLike,
  RequestFollowing,
  RequestFollowingCancellation,
};
