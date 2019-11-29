const { commentQuery } = require('./CommentQuery');
const { postDetailQuery } = require('./PostDetailQuery');
const { searchHashtagQuery } = require('./SearchHashtagQuery');
const { searchUserQuery } = require('./SearchUserQuery');
const { logQuery } = require('./LogQuery');
const { followingPostListQuery } = require('./FollowingPostListQuery');
const { likerListQuery } = require('./LikerListQuery');

module.exports = {
  commentQuery,
  postDetailQuery,
  searchHashtagQuery,
  searchUserQuery,
  logQuery,
  followingPostListQuery,
  likerListQuery,
};
