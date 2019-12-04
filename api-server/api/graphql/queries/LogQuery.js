const { GraphQLInt, GraphQLList } = require('graphql');

const { LogType } = require('../types');
const { Log, User, Sequelize } = require('../../../db');

const { Op } = Sequelize;

const logQuery = {
  type: new GraphQLList(LogType),
  args: {
    id: { type: GraphQLInt },
  },
  resolve: (log, args) => {
    return Log.findAll({
      attributes: ['status', 'From', 'PostId'],
      where: { to: args.id },
    });
  },
};

module.exports = { logQuery };
