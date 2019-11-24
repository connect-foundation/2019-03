const { GraphQLList, GraphQLInt } = require('graphql');

const { PostType } = require('../types/PostType');
const { getFollowingPostList } = require('../../services/PostService');

const followingPostListQuery = {
  type: new GraphQLList(PostType),
  args: {
    id: {
      type: GraphQLInt,
    },
  },
  resolve: async (_, { id }) => {
    try {
      const postList = await getFollowingPostList(id);
      return postList;
    } catch (err) {
      return { error: err.message };
    }
  },
};

module.exports = { followingPostListQuery };
