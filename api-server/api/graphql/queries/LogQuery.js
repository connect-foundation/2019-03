const { GraphQLID, GraphQLList } = require('graphql');

const { LogType } = require('../types');
const { getLogs } = require('../../services/log-service');

const logQuery = {
  type: new GraphQLList(LogType),
  args: {
    id: { type: GraphQLID },
  },
  resolve: async (_, { id }) => {
    const logs = await getLogs(id);
    return logs;
  },
};

module.exports = { logQuery };
