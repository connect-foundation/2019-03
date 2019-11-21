const { GraphQLObjectType, GraphQLString } = require('graphql');

const SearchUserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    type: {
      type: GraphQLString,
      resolve: () => 'user',
    },
    username: {
      type: GraphQLString,
      resolve: user => user.username,
    },
    name: {
      type: GraphQLString,
      resolve: user => user.name,
    },
    profileImage: {
      type: GraphQLString,
      resolve: user => user.profileImage,
    },
  }),
});

module.exports = { SearchUserType };
