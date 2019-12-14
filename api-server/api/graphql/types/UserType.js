const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
<<<<<<< HEAD
  GraphQLInt,
=======
  GraphQLID,
>>>>>>> [Fix] 좋아요 버그 해결
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
