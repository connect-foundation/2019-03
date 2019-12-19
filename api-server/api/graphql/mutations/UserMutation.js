const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} = require('graphql');
const { GraphQLUpload } = require('graphql-upload');

const { UserType } = require('../types');
const { User } = require('../../../db');
const s3 = require('../../../upload');
const { updateProfileImage } = require('../../services/UserService');

const updateUser = {
  type: UserType,
  description: 'The mutation that allows you to update a User',
  args: {
    id: {
      name: 'id',
      type: GraphQLNonNull(GraphQLID),
    },
    name: {
      name: 'name',
      type: GraphQLString,
    },
    username: {
      name: 'username',
      type: GraphQLString,
    },
    email: {
      name: 'email',
      type: GraphQLString,
    },
    cellPhone: {
      name: 'cellPhone',
      type: GraphQLString,
    },
  },
  resolve: async (_, { id, name, username, email, cellPhone }) => {
    const target = {};
    if (name) target.name = name;
    if (username) target.username = username;
    if (email) target.email = email;
    if (cellPhone) target.cellPhone = cellPhone;
    try {
      await User.update(target, {
        where: {
          id,
        },
      });
      return target;
    } catch (err) {
      return err;
    }
  },
};

const updateProfile = {
  type: GraphQLString,
  description: 'The mutation that allows you to update a profileImage',
  args: {
    file: {
      description: 'Image file.',
      type: GraphQLUpload,
    },
    userId: {
      type: GraphQLID,
    },
  },
  resolve: async (_, { file, userId }) => {
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
        Key: `user/${Date.now().toString()}_${filename}`,
        Body: stream,
      })
      .promise();

    await updateProfileImage(imageFile, userId);
    return imageFile.Location;
  },
};

module.exports = {
  updateUser,
  updateProfile,
};
