const { GraphQLString } = require('graphql');

const { UserPageType } = require('../types');
const { getUserCount, getPostCard } = require('../../services/UserPageService');

const userPageQuery = {
  type: UserPageType,
  args: {
    writer: { type: GraphQLString },
  },
  resolve: async (post, args) => {
    try {
      const userCount = await getUserCount(args);
      const isExistingUser = !!userCount;
      let postCard = [];
      if (isExistingUser) postCard = await getPostCard(args);
      const data = { isExistingUser, postCard };
      return data;
    } catch (e) {
      return { error: e.message };
    }
  },
};

module.exports = { userPageQuery };
