const { GraphQLList, GraphQLInt } = require('graphql');

const { PostType } = require('../types');
const { getFollowingPostList } = require('../../services/PostService');

const followingPostListQuery = {
  type: new GraphQLList(PostType),
  args: {
    id: {
      type: GraphQLInt,
    },
    offset: {
      type: GraphQLInt,
      defaultValue: 0,
    },
    limit: {
      type: GraphQLInt,
      defaultValue: 10,
    },
  },
  resolve: async (_, { id, offset, limit }, context) => {
    try {
      // eslint-disable-next-line no-param-reassign
      context.userId = id;
      const postList = await getFollowingPostList(id, offset, limit);
      return postList;
    } catch (err) {
      return { error: err.message };
    }
  },
};

module.exports = { followingPostListQuery };
