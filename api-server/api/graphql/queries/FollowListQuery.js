const { GraphQLList, GraphQLID } = require('graphql');

const { UserType } = require('../types');
const {
  getFollowList,
  getFollowIdList,
  getFollowDataList,
  getFollowUpdatedDataList,
} = require('../../services/FollowListService');

const followListQuery = {
  type: new GraphQLList(UserType),
  args: {
    myId: {
      type: GraphQLID,
    },
    userId: {
      type: GraphQLID,
    },
  },
  resolve: async (_, args) => {
    try {
      const followList = await getFollowList(args);
      const followIdList = getFollowIdList(followList);
      const followDataList = await getFollowDataList(followIdList);
      const followUpdatedDataList = await getFollowUpdatedDataList(
        followDataList,
        args,
      );
      return followUpdatedDataList;
    } catch (err) {
      console.log(err);
      return { error: err.message };
    }
  },
};

module.exports = { followListQuery };
