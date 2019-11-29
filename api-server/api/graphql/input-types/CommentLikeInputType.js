const {
  GraphQLNonNull,
  GraphQLInt,
  GraphQLInputObjectType,
} = require('graphql');

const CommentLikeInputType = new GraphQLInputObjectType({
  name: 'CommentLikeInputType',
  fields: () => ({
    CommentId: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    UserId: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  }),
});

module.exports = { CommentLikeInputType };
