const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

const UserInfoType = new GraphQLObjectType({
  name: 'userInfo',
  fields: () => ({
    name: {
      type: GraphQLString,
      resolve: userInfo => userInfo.name,
    },
    id: {
      type: GraphQLInt,
      resolve: userInfo => userInfo.id,
    },
    profileImage: {
      type: GraphQLString,
      resolve: userInfo => userInfo.profileImage,
    },
    isFollowing: {
      type: GraphQLInt,
      resolve: userInfo => userInfo.isFollowing,
    },
    postNumber: {
      type: GraphQLInt,
      resolve: userInfo => userInfo.postNumber,
    },
    followersNum: {
      type: GraphQLInt,
      resolvle: userInfo => userInfo.followersNum,
    },
    followsNum: {
      type: GraphQLInt,
      resolve: userInfo => userInfo.followsNum,
    },
  }),
});

module.exports = { UserInfoType };
