const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');
const {
  UserFollow,
  Sequelize: { Op },
} = require('../../../db');

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: GraphQLInt,
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
      resolve: async ({ id }, _, context) => {
        try {
          const isFollow = await UserFollow.findOne({
            attributes: ['status'],
            where: { [Op.and]: [{ from: context.UserId }, { to: id }] },
          });
          if (!isFollow) return null;
          return isFollow.dataValues.status;
        } catch (err) {
          return { error: err.message };
        }
      },
    },
  }),
});

module.exports = { UserType };
