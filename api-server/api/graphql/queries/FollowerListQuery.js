const { GraphQLList, GraphQLInt } = require('graphql');

const { UserType } = require('../types');
const {
  getFollowerList,
  getFollowerIdList,
  getFollowDataList,
  getFollowUpdatedDataList,
} = require('../../services/FollowListService');

const followerListQuery = {
  type: new GraphQLList(UserType),
  args: {
    myId: {
      type: GraphQLInt,
    },
    userId: {
      type: GraphQLInt,
    },
  },
  resolve: async (_, args) => {
    try {
      const followerList = await getFollowerList(args);
      const followerIdList = getFollowerIdList(followerList);
      const followerDataList = await getFollowDataList(followerIdList);
      const followerUpdatedDataList = await getFollowUpdatedDataList(
        followerDataList,
        args,
      );
      return followerUpdatedDataList;
    } catch (err) {
      console.log(err);
      return { error: err.message };
    }
  },
};

module.exports = { followerListQuery };
