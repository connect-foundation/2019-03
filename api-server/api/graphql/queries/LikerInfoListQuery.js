const {
  GraphQLList,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

const { UserType } = require('../types');
const {
  getFollowDataList,
  getFollowUpdatedDataList,
} = require('../../services/followlist-service');
const {
  getLikerList,
  getLikerIdList,
} = require('../../services/likerinfolist-service');

const likerInfoListQuery = {
  type: new GraphQLList(UserType),
  args: {
    myId: {
      type: GraphQLID,
    },
    PostId: {
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
    const likerList = await getLikerList(args);
    const likerIdList = getLikerIdList(likerList);
    const likerDataList = await getFollowDataList(likerIdList, args);
    const likerUpdatedDataList = await getFollowUpdatedDataList(
      likerDataList,
      args,
    );
    return likerUpdatedDataList;
  },
};

module.exports = { likerInfoListQuery };
