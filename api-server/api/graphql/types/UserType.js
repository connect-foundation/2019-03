const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: GraphQLID,
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
  }),
});

module.exports = { UserType };
