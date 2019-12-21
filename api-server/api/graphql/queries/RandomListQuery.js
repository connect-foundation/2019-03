const { GraphQLList } = require('graphql');

const { UserType } = require('../types');
const { getRandomSuggestion } = require('../../services/randomlist-service');

const randomListQuery = {
  type: new GraphQLList(UserType),
  resolve: async () => {
    const randomSuggestion = await getRandomSuggestion();
    return randomSuggestion;
  },
};

module.exports = { randomListQuery };
