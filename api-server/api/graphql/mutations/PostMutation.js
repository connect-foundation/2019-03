const { GraphQLNonNull, GraphQLString } = require('graphql');

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

const updatePost = {
  type: PostType,
  description: 'The mutation that allows you to update a Post',
  args: {
    content: {
      name: 'content',
      type: new GraphQLNonNull(GraphQLString),
    },
    postURL: {
      name: 'postURL',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (_, { postURL, content }) => {
    return Post.update(
      { content },
      {
        where: {
          postURL,
        },
      },
    );
  },
};

module.exports = {
  deletePost,
  updatePost,
};
