const { GraphQLString, GraphQLInt } = require('graphql');

const { PostType } = require('../types');
const { Post } = require('../../../db');

const postDetailQuery = {
  type: PostType,
  args: {
    id: { type: GraphQLInt },
    postURL: { type: GraphQLString },
  },
  resolve: (_, { id, postURL }, context) => {
    // eslint-disable-next-line no-param-reassign
    context.UserId = id;
    return Post.findOne({
      where: { postURL },
    });
  },
};

module.exports = { postDetailQuery };
