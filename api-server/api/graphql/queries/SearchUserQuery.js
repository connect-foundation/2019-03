const { GraphQLString, GraphQLList } = require('graphql');

const { SearchUserType } = require('../types');
const { searchUsers } = require('../../services/search-service');

const searchUserQuery = {
  type: new GraphQLList(SearchUserType),
  args: {
    id: { type: GraphQLString },
  },
  resolve: async (_, { id }) => {
    const users = await searchUsers(id);
    return users;
  },
};

module.exports = { searchUserQuery };
