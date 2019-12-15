const { createComment } = require('./CommentMutation');
const { createPostLike, deletePostLike } = require('./PostLikeMutation');
const { createPost, deletePost, updatePost } = require('./PostMutation');
const {
  createCommentLike,
  deleteCommentLike,
} = require('./CommentLikeMutation');
const { RequestFollowing } = require('./RequestFollowing');
const {
  RequestFollowingCancellation,
} = require('./RequestFollowingCancellation');
const { updateUser } = require('./UserMutation');

module.exports = {
  updateUser,
  deletePost,
  updatePost,
  createComment,
  createPostLike,
  deletePostLike,
  createCommentLike,
  deleteCommentLike,
  RequestFollowing,
  RequestFollowingCancellation,
  createPost,
};
