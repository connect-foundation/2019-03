const FormatError = require('easygraphql-format-error');

const formatError = new FormatError([
  {
    name: 'INTERNAL_SERVER_ERROR',
    message: 'The server is sick.',
    statusCode: 500,
  },
  {
    name: 'BAD_REQUEST',
    message: 'The request is invalid',
    statusCode: 400,
  },
  {
    name: 'COMMENT_QUERY_ERROR',
    message: 'The query of comment does not work.',
    statusCode: 500,
  },
  {
    name: 'FOLLOWER_QUERY_ERROR',
    message: 'The query of follower does not work.',
    statusCode: 500,
  },
  {
    name: 'FOLLOW_QUERY_ERROR',
    message: 'The query of follow does not work.',
    statusCode: 500,
  },
  {
    name: 'RANDOM_QUERY_ERROR',
    message: 'The query of random does not work.',
    statusCode: 500,
  },
  {
    name: 'FOLLOWING_POST_QUERY_ERROR',
    message: 'The query of following post does not work.',
    statusCode: 500,
  },
  {
    name: 'POST_INSERT_ERROR',
    message: 'The insertion of post does not work.',
    statusCode: 500,
  },
  {
    name: 'POST_DELETE_ERROR',
    message: 'The deletion of post does not work.',
    statusCode: 500,
  },
  {
    name: 'POST_LIKE_ERROR',
    message: 'The query of following post does not work.',
    statusCode: 500,
  },
  {
    name: 'HASHTAG_QUERY_ERROR',
    message: 'The query of hashtag does not work.',
    statusCode: 500,
  },
  {
    name: 'HASHTAG_INSERT_ERROR',
    message: 'The insertion of hashtag does not work.',
    statusCode: 500,
  },
  {
    name: 'USERTAG_INSERT_ERROR',
    message: 'The insertion of hashtag does not work.',
    statusCode: 500,
  },
  {
    name: 'LOG_QUERY_ERROR',
    message: 'The query of log does not work.',
    statusCode: 500,
  },
  {
    name: 'FOLLOW_INSERT_ERROR',
    message: 'The insertion of follow does not work.',
    statusCode: 500,
  },
  {
    name: 'FOLLOW_DELETE_ERROR',
    message: 'The deletion of follow does not work.',
    statusCode: 500,
  },
  {
    name: 'USER_PAGE_QUERY_ERROR',
    message: 'The query of user page does not work.',
    statusCode: 500,
  },
  {
    name: 'USER_PROFILE_UPDATE_ERROR',
    message: 'The update of user profile does not work.',
    statusCode: 500,
  },
  {
    name: 'PROFILE_IMAGE_UPDATE_ERROR',
    message: 'The update of user profile image does not work.',
    statusCode: 500,
  },
  {
    name: 'CLIENTS_QUERY_ERROR',
    message: 'The query of clients does not work.',
    statusCode: 500,
  },
  {
    name: 'POST_DETAIL_QUERY_ERROR',
    message: 'The query of post detail does not work.',
    statusCode: 500,
  },
  {
    name: 'LOGS_QUERY_ERROR',
    message: 'The query of logs does not work.',
    statusCode: 500,
  },
  {
    name: 'HASHTAGS_QUERY_ERROR',
    message: 'The query of hash tags does not work.',
    statusCode: 500,
  },
  {
    name: 'USERS_AND_HASHTAGS_SEARCH_ERROR',
    message: 'The search of users and hash tags does not work.',
    statusCode: 500,
  },
  {
    name: 'USERS_SEARCH_ERROR',
    message: 'The search of users does not work.',
    statusCode: 500,
  },
  {
    name: 'TAGGED_POSTS_QUERY_ERROR',
    message: 'The query of tagged posts does not work.',
    statusCode: 500,
  },
]);

module.exports = { formatError, errorName: formatError.errorName };
