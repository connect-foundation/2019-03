const { GraphQLString, GraphQLID } = require('graphql');

const { UserPageType } = require('../types');
const { getUserPageData } = require('../../services/userpage-service');

const userPageQuery = {
  type: UserPageType,
  args: {
    username: { type: GraphQLString },
    myId: { type: GraphQLID },
  },
  resolve: async (_, args) => {
    const data = await getUserPageData(args);
    return data;
  },
};

module.exports = { userPageQuery };
