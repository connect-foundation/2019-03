const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const {
  searchUserQuery,
  searchHashtagQuery,
  postDetailQuery,
  commentQuery,
} = require('./queries');
const { createComment } = require('./mutations');

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
  fields: () => ({
    createComment,
  }),
});

const schema = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation,
});

module.exports = { schema };
