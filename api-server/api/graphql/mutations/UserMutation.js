const { GraphQLNonNull, GraphQLString, GraphQLID } = require('graphql');

const { UserType } = require('../types');
const { User } = require('../../../db');

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

module.exports = {
  updateUser,
};
