const { GraphQLNonNull, GraphQLString, GraphQLID } = require('graphql');

const { UserType } = require('../types');
const { User } = require('../../../db');

const updateUser = {
  type: UserType,
  description: 'The mutation that allows you to update a User',
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID),
    },
    name: {
      name: 'name',
      type: new GraphQLNonNull(GraphQLString),
    },
    username: {
      name: 'username',
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      name: 'email',
      type: new GraphQLNonNull(GraphQLString),
    },
    cellPhone: {
      name: 'cellPhone',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (_, { id, name, username, email, cellPhone }) => {
    return User.update(
      { name, username, email, cellPhone },
      {
        where: {
          id,
        },
      },
    );
  },
};

module.exports = {
  updateUser,
};
