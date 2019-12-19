const { GraphQLList, GraphQLID } = require('graphql');

const { ClientType } = require('../types');
const { getClients } = require('../../services/client-service');

const clientQuery = {
  type: new GraphQLList(ClientType),
  args: {
    id: { type: GraphQLID },
  },
  resolve: async (_, { id }) => {
    const clients = await getClients(id);
    return clients;
  },
};

module.exports = { clientQuery };
