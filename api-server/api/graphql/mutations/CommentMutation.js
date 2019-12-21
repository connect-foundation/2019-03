const {
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLNonNull,
} = require('graphql');

const { CommentType } = require('../types/CommentType');
const { insertComment } = require('../../services/comment-service');

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
  resolve: async (_, args) => {
    const comment = await insertComment(args);
    return comment;
  },
};

module.exports = {
  createComment,
};
