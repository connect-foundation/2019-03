const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLBoolean,
} = require('graphql');
const { User } = require('../../../db');
const { UserType } = require('./UserType');
const { checkUserLikeComment } = require('../../services/CommentService');

const CommentType = new GraphQLObjectType({
  name: 'Comment',
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve: comment => comment.id,
    },
    content: {
      type: GraphQLString,
      resolve: comment => comment.content,
    },
    depth: {
      type: GraphQLInt,
      resolve: comment => comment.depth,
    },
    updatedAt: {
      type: GraphQLString,
    },
    isLike: {
      type: GraphQLBoolean,
      resolve: async ({ id: commentId }, _, { userId }) => {
        try {
          const isLike = await checkUserLikeComment(userId, commentId);
          return isLike;
        } catch (err) {
          return false;
        }
      },
    },
    PostId: {
      type: GraphQLInt,
      resolve: comment => comment.PostId,
    },
    writer: {
      type: UserType,
      resolve: comment => {
        return User.findOne({ where: { id: comment.UserId } });
      },
    },
  }),
});

module.exports = { CommentType };
