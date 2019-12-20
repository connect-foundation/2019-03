const {
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

const { UserType } = require('../types');
const {
  getFollowerList,
  getFollowerIdList,
  getFollowDataList,
  getFollowUpdatedDataList,
} = require('../../services/followlist-service');

const followerListQuery = {
  type: new GraphQLList(UserType),
  args: {
    myId: {
      type: GraphQLID,
    },
    userId: {
      type: GraphQLID,
    },
    cursor: {
      type: GraphQLString,
      defaultValue: new Date().getTime().toString(),
    },
    limit: {
      type: GraphQLInt,
      defaultValue: 10,
    },
  },
  resolve: async (_, args) => {
    const followerList = await getFollowerList(args);
    const followerIdList = getFollowerIdList(followerList);
    const followerDataList = await getFollowDataList(followerIdList, args);
    const followerUpdatedDataList = await getFollowUpdatedDataList(
      followerDataList,
      args,
    );
    return followerUpdatedDataList;
  },
};

module.exports = { followerListQuery };
