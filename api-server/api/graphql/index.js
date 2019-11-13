const { GraphQLSchema, GraphQLObjectType } = require('graphql');

const rootQuery = new GraphQLObjectType({
  name: 'rootQuery',
  fields: () => ({}),
});

const rootMutation = new GraphQLObjectType({
  name: 'rootMutation',
  fields: () => ({}),
});

const schema = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation,
});

module.exports = { schema };
