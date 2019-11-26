const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { searchUserQuery } = require('./queries/SearchUserQuery');
const { searchHashtagQuery } = require('./queries/SearchHashtagQuery');
const { postDetailQuery } = require('./queries/PostDetailQuery');
const { commentQuery } = require('./queries/CommentQuery');

const rootQuery = new GraphQLObjectType({
  name: 'rootQuery',
  fields: () => ({
    searchUser: searchUserQuery,
    searchHashtag: searchHashtagQuery,
    post: postDetailQuery,
    commentList: commentQuery,
  }),
});

const rootMutation = new GraphQLObjectType({
  name: 'rootMutation',
  fields: () => ({}),
});

const schema = new GraphQLSchema({
  query: rootQuery,
  // mutation: rootMutation,
});

module.exports = { schema };
