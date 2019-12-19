const { GraphQLList, GraphQLID } = require('graphql');

const { ClientType } = require('../types');
const { Client } = require('../../../db');

const clientQuery = {
  type: new GraphQLList(ClientType),
  args: {
    id: { type: GraphQLID },
  },
  resolve: async (client, args) => {
    return Client.findAll({
      where: { UserId: args.id },
    });
  },
};

module.exports = { clientQuery };
