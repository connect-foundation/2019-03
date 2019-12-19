const {
  GraphQLInt,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} = require('graphql');

const { PostType } = require('../types');
const { getFollowingPostList } = require('../../services/post-service');

const followingPostListQuery = {
  type: new GraphQLList(PostType),
  args: {
    id: {
      type: GraphQLID,
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
    context.UserId = id;
    const postList = await getFollowingPostList(id, cursor, limit);
    return postList;
  },
};

module.exports = { followingPostListQuery };
