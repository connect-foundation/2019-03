const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');

const LikerInfoType = new GraphQLObjectType({
  name: 'LikerInfoType',
  fields: () => ({
    likerCount: {
      type: GraphQLInt,
    },
    username: {
      type: GraphQLString,
    },
    profileImage: {
      type: GraphQLString,
    },
  }),
});

module.exports = { LikerInfoType };
