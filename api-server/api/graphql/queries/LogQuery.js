const { GraphQLString, GraphQLList } = require('graphql');

const { LogType } = require('../types');
const { Log, User, Sequelize } = require('../../../db');

const { Op } = Sequelize;

const logQuery = {
  type: new GraphQLList(LogType),
  args: {
    username: { type: GraphQLString },
  },
  resolve: (log, args) => {
    console.log(111);
    return Log.findAll({
      include: [
        {
          model: User,
          where: {
            [Op.and]: [{ username: args.username }],
          },
        },
      ],
    });
  },
};

module.exports = { logQuery };
