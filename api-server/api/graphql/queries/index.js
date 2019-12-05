const { commentQuery } = require('./CommentQuery');
const { postDetailQuery } = require('./PostDetailQuery');
const { searchQuery } = require('./SearchQuery');
const { logQuery } = require('./LogQuery');
const { followingPostListQuery } = require('./FollowingPostListQuery');
const { likerListQuery } = require('./LikerListQuery');
const { postCardQuery } = require('./PostCardQuery');

module.exports = {
  commentQuery,
  postDetailQuery,
  searchQuery,
  logQuery,
  followingPostListQuery,
  likerListQuery,
  postCardQuery,
};
