const { GraphQLList, GraphQLInt } = require('graphql');

const { CommentType } = require('../types');
const { Comment } = require('../../../db');

const commentQuery = {
  type: new GraphQLList(CommentType),
  args: {
    PostId: { type: GraphQLInt },
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
  },
  resolve: (post, args) => {
    return Comment.findAll({
      where: { PostId: args.PostId },
      offset: args.offset,
      limit: args.limit,
      order: [['updatedAt', 'DESC']],
    });
  },
};

module.exports = { commentQuery };
