const { GraphQLNonNull, GraphQLID } = require('graphql');

const { setPostLike, unsetPostLike } = require('../../services/PostService');

const createPostLike = {
  type: GraphQLID,
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
      return PostId;
    } catch (err) {
      return '';
    }
  },
};

const deletePostLike = {
  type: GraphQLID,
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
      return PostId;
    } catch (err) {
      return 0;
    }
  },
};

module.exports = { createPostLike, deletePostLike };
