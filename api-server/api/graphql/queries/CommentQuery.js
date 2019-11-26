const { GraphQLList, GraphQLString, GraphQLInt } = require('graphql');

const { CommentType } = require('../types');
const { Comment, Post } = require('../../../db');

const commentQuery = {
  type: new GraphQLList(CommentType),
  args: {
    postId: { type: GraphQLInt },
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
  },
  resolve: (post, args) => {
    return Comment.findAll({
      where: { postId: args.postId },
      offset: args.offset,
      limit: args.limit,
    });
  },
};

module.exports = { commentQuery };
