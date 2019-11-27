const {
  GraphQLNonNull,
  GraphQLInt,
  GraphQLInputObjectType,
} = require('graphql');

const PostLikeInputType = new GraphQLInputObjectType({
  name: 'PostLikeInputType',
  fields: () => ({
    PostId: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    UserId: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  }),
});

module.exports = { PostLikeInputType };
