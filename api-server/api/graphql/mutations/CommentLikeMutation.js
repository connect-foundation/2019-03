const { GraphQLBoolean } = require('graphql');

const { CommentLikeInputType } = require('../input-types');
const {
  setCommentLike,
  unsetCommentLike,
} = require('../../services/comment-service');

const createCommentLike = {
  type: GraphQLBoolean,
  args: {
    CommentLike: {
      type: CommentLikeInputType,
    },
  },

  resolve: async (_, { CommentLike }) => {
    const { UserId, CommentId } = CommentLike;
    await setCommentLike(UserId, CommentId);
    return true;
  },
};

const deleteCommentLike = {
  type: GraphQLBoolean,
  args: {
    CommentLike: {
      type: CommentLikeInputType,
    },
  },

  resolve: async (_, { CommentLike }) => {
    const { UserId, CommentId } = CommentLike;
    await unsetCommentLike(UserId, CommentId);
    return true;
  },
};

module.exports = { createCommentLike, deleteCommentLike };
