const { GraphQLNonNull, GraphQLBoolean, GraphQLID } = require('graphql');

const { setPostLike, unsetPostLike } = require('../../services/PostService');

const createPostLike = {
  type: GraphQLBoolean,
  args: {
    PostId: {
      name: 'PostId',
      type: new GraphQLNonNull(GraphQLID),
    },
    UserId: {
      name: 'UserId',
      type: new GraphQLNonNull(GraphQLID),
    },
    WriterId: {
      name: 'WriterId',
      type: new GraphQLNonNull(GraphQLID),
    },
  },

  resolve: async (_, { UserId, WriterId, PostId }) => {
    try {
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
    PostId: {
      name: 'PostId',
      type: new GraphQLNonNull(GraphQLID),
    },
    UserId: {
      name: 'UserId',
      type: new GraphQLNonNull(GraphQLID),
    },
  },

  resolve: async (_, { UserId, PostId }) => {
    try {
      await unsetPostLike(UserId, PostId);
      return true;
    } catch (err) {
      return false;
    }
  },
};

module.exports = { createPostLike, deletePostLike };
