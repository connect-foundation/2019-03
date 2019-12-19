const { GraphQLNonNull, GraphQLString, GraphQLID } = require('graphql');
const { GraphQLUpload } = require('graphql-upload');

const { PostType } = require('../types');
const { Post } = require('../../../db');
const {
  insertPost,
  insertHashTagOfPost,
} = require('../../services/PostService');
const s3 = require('../../../upload');

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
  async resolve(parent, { file, userId, content }) {
    try {
      const postInfo = { userId, content };
      const { filename, createReadStream } = await file;
      const stream = createReadStream();

      const extensionRegex = /(.jpg|.gif|.jpeg|.png)$/i;
      if (!extensionRegex.test(filename)) {
        return false;
      }

      const imageFile = await s3
        .upload({
          Bucket: `${process.env.BUCKET}`,
          ACL: 'public-read',
          Key: `post/${Date.now().toString()}_${filename}`,
          Body: stream,
        })
        .promise();

      const post = await insertPost(imageFile, postInfo);
      return post;
    } catch (e) {
      console.log(e);
      return e;
    }
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
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (_, { id, content }) => {
    try {
      await Post.update(
        { content },
        {
          where: {
            id,
          },
        },
      );
      await insertHashTagOfPost(content, id);
      return { id, content };
    } catch (error) {
      console.log(error.message);
    }
  },
};

module.exports = {
  createPost,
  deletePost,
  updatePost,
};
