const { GraphQLList, GraphQLInt, GraphQLString } = require('graphql');

const { PostType } = require('../types');
const { getFollowingPostList } = require('../../services/PostService');

const followingPostListQuery = {
  type: new GraphQLList(PostType),
  args: {
    id: {
      type: GraphQLInt,
    },
    cursor: {
      type: GraphQLString,
    },
    limit: {
      type: GraphQLInt,
      defaultValue: 10,
    },
  },
  resolve: async (_, { id, cursor, limit }, context) => {
    try {
      // eslint-disable-next-line no-param-reassign
      context.UserId = id;
      const postList = await getFollowingPostList(id, cursor, limit);
      return postList;
    } catch (err) {
      return { error: err.message };
    }
  },
};

module.exports = { followingPostListQuery };
