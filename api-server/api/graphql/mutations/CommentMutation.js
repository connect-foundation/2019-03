const { GraphQLString, GraphQLInt, GraphQLNonNull } = require('graphql');

const { CommentType } = require('../types/CommentType');
const { Comment } = require('../../../db');

const createComment = {
  type: CommentType,
  description: 'The mutation that allows you to create a new Comment',
  args: {
    content: {
      name: 'content',
      type: new GraphQLNonNull(GraphQLString),
    },
    depth: {
      name: 'depth',
      type: GraphQLInt,
    },
    PostId: {
      name: 'PostId',
      type: new GraphQLNonNull(GraphQLInt),
    },
    UserId: {
      name: 'UserId',
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
  resolve: (value, { content, depth, PostId, UserId }) =>
    Comment.create({
      content,
      depth,
      PostId,
      UserId,
      updatedAt: new Date(),
    }),
};

module.exports = {
  createComment,
};
