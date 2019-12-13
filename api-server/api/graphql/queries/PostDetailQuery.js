const { GraphQLString, GraphQLID } = require('graphql');

const { PostType } = require('../types');
const { Post } = require('../../../db');

const postDetailQuery = {
  type: PostType,
  args: {
    id: { type: GraphQLID },
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
