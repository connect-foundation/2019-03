const {
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLObjectType,
} = require('graphql');

const LikerType = new GraphQLObjectType({
  name: 'LikerType',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    username: {
      type: GraphQLString,
      resolve: ({ User }) => User.username,
    },
    name: {
      type: GraphQLString,
      resolve: ({ User }) => User.name,
    },
    profileImage: {
      type: GraphQLString,
      resolve: ({ User }) => User.profileImage,
    },
    followStatus: {
      type: GraphQLInt,
      resolve: () => 0,
    },
  }),
});

module.exports = { LikerType };
