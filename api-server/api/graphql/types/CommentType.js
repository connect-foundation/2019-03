const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
} = require('graphql');
const { User } = require('../../../db');
const { WriterType } = require('./WriterType');

const CommentType = new GraphQLObjectType({
  name: 'Comment',
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve: post => post.id,
    },
    content: {
      type: GraphQLString,
      resolve: comment => comment.content,
    },
    depth: {
      type: GraphQLInt,
      resolve: comment => comment.depth,
    },
    PostId: {
      type: GraphQLInt,
      resolve: comment => comment.PostId,
    },
    writer: {
      type: WriterType,
      resolve: comment => {
        return User.findOne({ where: { id: comment.UserId } });
      },
    },
  }),
});

module.exports = { CommentType };
