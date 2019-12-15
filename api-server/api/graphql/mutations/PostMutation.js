const { GraphQLNonNull, GraphQLString, GraphQLInt } = require('graphql');

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
      type: GraphQLString,
    },
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
  resolve: async (_, { id, content }) => {
    await Post.update(
      { content },
      {
        where: {
          id,
        },
      },
    );
    return { id, content };
  },
};

module.exports = {
  deletePost,
  updatePost,
};
