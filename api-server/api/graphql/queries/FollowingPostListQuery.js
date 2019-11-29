const { GraphQLList, GraphQLInt } = require('graphql');

const { PostType } = require('../types');
const { getFollowingPostList } = require('../../services/PostService');

const followingPostListQuery = {
  type: new GraphQLList(PostType),
  args: {
    id: {
      type: GraphQLInt,
    },
  },
  resolve: async (_, { id }, context) => {
    try {
      // eslint-disable-next-line no-param-reassign
      context.userId = id;
      const postList = await getFollowingPostList(id);
      return postList;
    } catch (err) {
      return { error: err.message };
    }
  },
};

module.exports = { followingPostListQuery };
