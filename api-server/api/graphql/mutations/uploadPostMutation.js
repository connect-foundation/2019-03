const { GraphQLBoolean, GraphQLInt, GraphQLString } = require('graphql');
const { GraphQLUpload } = require('graphql-upload');
const { insertPost } = require('../../services/PostService');
const s3 = require('../../../upload');

const UploadPostMutation = {
  type: GraphQLBoolean,
  args: {
    file: {
      description: 'Image file.',
      type: GraphQLUpload,
    },
    userId: {
      type: GraphQLInt,
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

      insertPost(imageFile, postInfo);
    } catch (e) {
      console.log(e);
    }
    return true;
  },
};

module.exports = {
  UploadPostMutation,
};
