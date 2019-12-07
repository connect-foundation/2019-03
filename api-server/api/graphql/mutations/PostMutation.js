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
  resolve: (_, { postURL }) =>
    Post.destroy({
      where: {
        postURL,
      },
    }),
};

module.exports = {
  deletePost,
};
