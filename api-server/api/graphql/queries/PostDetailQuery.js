const { GraphQLString } = require('graphql');

const { PostType } = require('../types');
const { Post } = require('../../../db');

const postDetailQuery = {
  type: PostType,
  args: {
    postURL: { type: GraphQLString },
  },
  resolve: (post, args) => {
    return Post.findOne({
      where: { postURL: args.postURL },
    });
  },
};

module.exports = { postDetailQuery };
