const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
} = require('graphql');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: GraphQLInt,
    },
    username: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    cellPhone: {
      type: GraphQLString,
    },
    profileImage: {
      type: GraphQLString,
    },
    isFollow: {
      type: GraphQLBoolean,
      resolve: () => true,
    },
  }),
});

module.exports = { UserType };
