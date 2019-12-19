const { GraphQLString, GraphQLList } = require('graphql');
const { SearchType } = require('../types');

const { searchUsersAndHashTags } = require('../../services/search-service');

const searchQuery = {
  type: new GraphQLList(SearchType),
  args: {
    value: { type: GraphQLString },
  },
  resolve: async (_, { value }) => {
    const searchResult = await searchUsersAndHashTags(value);
    return searchResult;
  },
};

module.exports = { searchQuery };
