const { GraphQLString } = require('graphql');

const { UserPageType } = require('../types');
const { getUserPageData } = require('../../services/UserPageService');

const userPageQuery = {
  type: UserPageType,
  args: {
    writer: { type: GraphQLString },
  },
  resolve: async (post, args) => {
    try {
      const data = await getUserPageData(args);
      return data;
    } catch (e) {
      return { error: e.message };
    }
  },
};

module.exports = { userPageQuery };
