const { GraphQLList, GraphQLInt } = require('graphql');

const { LikerType } = require('../types');
const { getLikerList } = require('../../services/PostService');

const likerListQuery = {
  type: new GraphQLList(LikerType),
  args: {
    postId: {
      type: GraphQLInt,
    },
  },
  resolve: async (_, { postId }) => {
    try {
      const likerList = await getLikerList(postId);
      return likerList;
    } catch (err) {
      return { error: err.message };
    }
  },
};

module.exports = { likerListQuery };
