const { GraphQLInt, GraphQLID, GraphQLList } = require('graphql');

const { CommentType } = require('../types');
const { getCommentList } = require('../../services/comment-service');

const commentQuery = {
  type: new GraphQLList(CommentType),
  args: {
    PostId: { type: GraphQLID },
    limit: { type: GraphQLInt },
    offset: { type: GraphQLInt },
  },
  resolve: async (_, { PostId, offset, limit }) => {
    const commentList = await getCommentList(PostId, offset, limit);
    return commentList;
  },
};

module.exports = { commentQuery };
