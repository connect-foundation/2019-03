const { GraphQLString, GraphQLList } = require('graphql');

const { SearchHashtagType } = require('../types');
const { getHashTags } = require('../../services/hashtag-service');

const searchHashtagQuery = {
  type: new GraphQLList(SearchHashtagType),
  args: {
    id: { type: GraphQLString },
  },
  resolve: async (_, { id }) => {
    const hashTags = await getHashTags(id);
    return hashTags;
  },
};

module.exports = { searchHashtagQuery };
