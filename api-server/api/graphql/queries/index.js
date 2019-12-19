const { commentQuery } = require('./CommentQuery');
const { postDetailQuery } = require('./PostDetailQuery');
const { searchQuery } = require('./SearchQuery');
const { logQuery } = require('./LogQuery');
const { followingPostListQuery } = require('./FollowingPostListQuery');
const { likerListQuery } = require('./LikerListQuery');
const { userPageQuery } = require('./UserPageQuery');
const { hashTagPageQuery } = require('./hashTagPageQuery');
const { followerListQuery } = require('./FollowerListQuery');
const { followListQuery } = require('./FollowListQuery');
const { taggedPostsQuery } = require('./TaggedPostsQuery');

module.exports = {
  commentQuery,
  postDetailQuery,
  searchQuery,
  logQuery,
  followingPostListQuery,
  likerListQuery,
  userPageQuery,
  hashTagPageQuery,
  followerListQuery,
  followListQuery,
  taggedPostsQuery,
};
