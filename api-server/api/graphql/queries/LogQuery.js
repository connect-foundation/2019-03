const { GraphQLInt, GraphQLList } = require('graphql');

const { LogType } = require('../types');
const { Log } = require('../../../db');

const logQuery = {
  type: new GraphQLList(LogType),
  args: {
    id: { type: GraphQLInt },
  },
  resolve: (log, args) => {
    return Log.findAll({
      attributes: ['id', 'status', 'From', 'To', 'PostId'],
      where: { to: args.id },
      order: [['updatedAt', 'DESC']],
    });
  },
};

module.exports = { logQuery };
