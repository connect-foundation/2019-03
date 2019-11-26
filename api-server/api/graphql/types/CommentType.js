const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');
const { User } = require('../../../db');
const { WriterType } = require('./WriterType');

const CommentType = new GraphQLObjectType({
  name: 'Comment',
  fields: () => ({
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
        console.log(comment);
        return User.findOne({ where: { id: comment.UserId } });
      },
    },
  }),
});

module.exports = { CommentType };
