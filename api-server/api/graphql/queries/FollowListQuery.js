const { GraphQLList, GraphQLID } = require('graphql');

const { UserType } = require('../types');
const {
  getFollowList,
  getFollowIdList,
  getFollowDataList,
  getFollowUpdatedDataList,
} = require('../../services/followlist-service');

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
    const followList = await getFollowList(args);
    const followIdList = getFollowIdList(followList);
    const followDataList = await getFollowDataList(followIdList);
    const followUpdatedDataList = await getFollowUpdatedDataList(
      followDataList,
      args,
    );
    return followUpdatedDataList;
  },
};

module.exports = { followListQuery };
