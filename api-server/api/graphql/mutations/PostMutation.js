const { GraphQLNonNull, GraphQLString, GraphQLID } = require('graphql');
const { GraphQLUpload } = require('graphql-upload');

const { PostType } = require('../types');
const postService = require('../../services/post-service');

const createPost = {
  type: PostType,
  args: {
    file: {
      description: 'Image file.',
      type: GraphQLUpload,
    },
    userId: {
      type: GraphQLID,
    },
    content: {
      type: GraphQLString,
    },
  },
  async resolve(_, { file, userId, content }) {
    const postInfo = { userId, content };
    const post = await postService.insertPost(file, postInfo);
    return post;
  },
};

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
    await postService.deletePost(postURL);
    return { postURL };
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
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (_, { id, content }) => {
    await postService.updatePostInfo(content, id);
    return { id, content };
  },
};

module.exports = {
  createPost,
  deletePost,
  updatePost,
};
