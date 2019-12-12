const { GraphQLString, GraphQLInt } = require('graphql');

const { UserPageType } = require('../types');
const { getUserPageData } = require('../../services/UserPageService');

const userPageQuery = {
  type: UserPageType,
  args: {
    username: { type: GraphQLString },
    myId: { type: GraphQLInt },
  },
  resolve: async (post, args) => {
    try {
      const data = await getUserPageData(args);
      return data;
    } catch (e) {
      console.log(e.message);
      return { error: e.message };
    }
  },
};

module.exports = { userPageQuery };
