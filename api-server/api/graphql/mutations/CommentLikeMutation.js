const { GraphQLBoolean } = require('graphql');

const { CommentLikeInputType } = require('../input-types');
const {
  setCommentLike,
  unsetCommentLike,
} = require('../../services/CommentService');

const createCommentLike = {
  type: GraphQLBoolean,
  args: {
    CommentLike: {
      type: CommentLikeInputType,
    },
  },

  resolve: async (_, { CommentLike }) => {
    try {
      const { UserId, CommentId } = CommentLike;
      await setCommentLike(UserId, CommentId);
      return true;
    } catch (err) {
      return false;
    }
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
    try {
      const { UserId, CommentId } = CommentLike;
      await unsetCommentLike(UserId, CommentId);
      return true;
    } catch (err) {
      return false;
    }
  },
};

module.exports = { createCommentLike, deleteCommentLike };
