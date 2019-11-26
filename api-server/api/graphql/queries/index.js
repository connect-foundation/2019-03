const { commentQuery } = require('./CommentQuery');
const { postDetailQuery } = require('./PostDetailQuery');
const { searchHashtagQuery } = require('./SearchHashtagQuery');
const { searchUserQuery } = require('./SearchUserQuery');
const { logQuery } = require('./LogQuery');

module.exports = {
  commentQuery,
  postDetailQuery,
  searchHashtagQuery,
  searchUserQuery,
  logQuery,
};
