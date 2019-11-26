const { GraphQLObjectType, GraphQLString, GraphQLBoolean } = require('graphql');

const WriterType = new GraphQLObjectType({
  name: 'Writer',
  fields: () => ({
    username: {
      type: GraphQLString,
      resolve: user => user.username,
    },
    isFollow: {
      type: GraphQLBoolean,
      resolve: user => true,
    },
    profileImage: {
      type: GraphQLString,
      resolve: user => user.profileImage,
    },
  }),
});

module.exports = { WriterType };
