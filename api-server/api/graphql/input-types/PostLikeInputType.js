const {
  GraphQLNonNull,
  GraphQLID,
  GraphQLInputObjectType,
} = require('graphql');

const PostLikeInputType = new GraphQLInputObjectType({
  name: 'PostLikeInputType',
  fields: () => ({
    PostId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    WriterId: {
      type: new GraphQLNonNull(GraphQLID),
    },
    UserId: {
      type: new GraphQLNonNull(GraphQLID),
    },
  }),
});

module.exports = { PostLikeInputType };
