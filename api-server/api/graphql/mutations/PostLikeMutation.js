const { GraphQLBoolean } = require('graphql');

const { PostLikeInputType } = require('../input-types');
const { setPostLike, unsetPostLike } = require('../../services/PostService');

const createPostLike = {
  type: GraphQLBoolean,
  args: {
    PostLike: {
      type: PostLikeInputType,
    },
  },

  resolve: async (_, { PostLike }) => {
    try {
      const { UserId, WriterId, PostId } = PostLike;
      await setPostLike(UserId, WriterId, PostId);
      return true;
    } catch (err) {
      return false;
    }
  },
};

const deletePostLike = {
  type: GraphQLBoolean,
  args: {
    PostLike: {
      type: PostLikeInputType,
    },
  },

  resolve: async (_, { PostLike }) => {
    try {
      const { UserId, PostId } = PostLike;
      await unsetPostLike(UserId, PostId);
      return true;
    } catch (err) {
      return false;
    }
  },
};

module.exports = { createPostLike, deletePostLike };
