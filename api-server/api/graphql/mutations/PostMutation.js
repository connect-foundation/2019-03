const { GraphQLNonNull, GraphQLID, GraphQLString } = require('graphql');

const { PostType } = require('../types');
const { Post } = require('../../../db');

const deletePost = {
  type: PostType,
  description: 'The mutation that allows you to delete a Post',
  args: {
    postURL: {
      name: 'postURL',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (_, { postURL }) => {
    await Post.destroy({
      where: {
        postURL,
      },
    });
    return {
      postURL,
    };
  },
};

module.exports = {
  deletePost,
};
