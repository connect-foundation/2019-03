const { createComment } = require('./CommentMutation');
const { createPostLike, deletePostLike } = require('./PostLikeMutation');

module.exports = { createComment, createPostLike, deletePostLike };
