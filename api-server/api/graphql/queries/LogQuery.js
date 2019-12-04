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
      attributes: ['id', 'status', 'From', 'PostId'],
      where: { to: args.id },
    });
  },
};

module.exports = { logQuery };
