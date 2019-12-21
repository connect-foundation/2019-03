const { GraphQLList, GraphQLID } = require('graphql');

const { LikerType } = require('../types');
const { getLikerList } = require('../../services/post-like-service');

const likerListQuery = {
  type: new GraphQLList(LikerType),
  args: {
    postId: {
      type: GraphQLID,
    },
  },
  resolve: async (_, { postId }) => {
    const likerList = await getLikerList(postId);
    return likerList;
  },
};

module.exports = { likerListQuery };
