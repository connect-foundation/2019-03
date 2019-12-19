const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} = require('graphql');
const {
  UserFollow,
  Sequelize: { Op },
} = require('../../../db');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    username: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    cellPhone: {
      type: GraphQLString,
    },
    profileImage: {
      type: GraphQLString,
    },
    isFollow: {
      type: GraphQLInt,
    },
  }),
});

module.exports = { UserType };
