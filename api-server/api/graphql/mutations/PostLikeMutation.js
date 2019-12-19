const { GraphQLNonNull, GraphQLID } = require('graphql');

const {
  setPostLike,
  unsetPostLike,
} = require('../../services/post-like-service');

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
    await setPostLike(UserId, WriterId, PostId);
    return PostId;
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
    await unsetPostLike(UserId, PostId);
    return PostId;
  },
};

module.exports = { createPostLike, deletePostLike };
