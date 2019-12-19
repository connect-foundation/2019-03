const {
  GraphQLNonNull,
  GraphQLID,
  GraphQLInputObjectType,
} = require('graphql');

const CommentLikeInputType = new GraphQLInputObjectType({
  name: 'CommentLikeInputType',
  fields: () => ({
    CommentId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    UserId: {
      type: new GraphQLNonNull(GraphQLID),
    },
  }),
});

module.exports = { CommentLikeInputType };
