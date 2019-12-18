const {
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLNonNull,
} = require('graphql');

const { CommentType } = require('../types/CommentType');
const { Comment, Log } = require('../../../db');

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
    WriterId: {
      name: 'WriterId',
      type: new GraphQLNonNull(GraphQLID),
    },
    PostId: {
      name: 'PostId',
      type: new GraphQLNonNull(GraphQLID),
    },
    UserId: {
      name: 'UserId',
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: (value, { content, depth, WriterId, PostId, UserId }) => {
    if (WriterId !== UserId) {
      Log.create({
        From: UserId,
        To: WriterId,
        PostId,
        status: 'comment',
        updatedAt: new Date(),
      });
    }

    return Comment.create({
      content,
      depth,
      PostId,
      UserId,
      updatedAt: new Date(),
    });
  },
};

module.exports = {
  createComment,
};
