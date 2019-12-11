const { GraphQLNonNull, GraphQLString } = require('graphql');

const { UserType } = require('../types');
const { User } = require('../../../db');

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
  updatePost,
};
