const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');

const ClientType = new GraphQLObjectType({
  name: 'ClientType',
  fields: () => ({
    clientId: {
      type: GraphQLString,
    },
    redirectionURI: {
      type: GraphQLString,
    },
    appName: {
      type: GraphQLString,
    },
    clientSecret: {
      type: GraphQLString,
    },
  }),
});

module.exports = { ClientType };
