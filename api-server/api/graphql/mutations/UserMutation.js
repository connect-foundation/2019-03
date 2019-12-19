const { GraphQLNonNull, GraphQLString, GraphQLID } = require('graphql');
const { GraphQLUpload } = require('graphql-upload');

const { UserType } = require('../types');
const {
  updateUserProfile,
  updateProfileImage,
} = require('../../services/user-service');

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

    await updateUserProfile(id, target);
    return target;
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
    const imageFile = await updateProfileImage(file, userId);
    return imageFile.Location;
  },
};

module.exports = {
  updateUser,
  updateProfile,
};
