const {
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

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
    cursor: {
      type: GraphQLString,
    },
    limit: {
      type: GraphQLInt,
      defaultValue: 10,
    },
  },
  resolve: async (_, args) => {
    // eslint-disable-next-line no-param-reassign
    if (!args.cursor) args.cursor = new Date().getTime().toString();
    const followList = await getFollowList(args);
    const followIdList = getFollowIdList(followList);
    const followDataList = await getFollowDataList(followIdList, args);
    const followUpdatedDataList = await getFollowUpdatedDataList(
      followDataList,
      args,
    );
    return followUpdatedDataList;
  },
};

module.exports = { followListQuery };
