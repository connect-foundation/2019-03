const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const { searchUserQuery } = require('./queries/SearchUserQuery');
const { searchHashtagQuery } = require('./queries/SearchHashtagQuery');

const rootQuery = new GraphQLObjectType({
  name: 'rootQuery',
  fields: () => ({
    searchUser: searchUserQuery,
    searchHashtag: searchHashtagQuery,
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
