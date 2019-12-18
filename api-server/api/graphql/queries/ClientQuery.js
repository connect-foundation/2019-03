const { GraphQLList, GraphQLInt } = require('graphql');

const { ClientType } = require('../types');
const { Client } = require('../../../db');

const clientQuery = {
  type: new GraphQLList(ClientType),
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (client, args) => {
    return Client.findAll({
      where: { UserId: args.id },
    });
  },
};

module.exports = { clientQuery };
