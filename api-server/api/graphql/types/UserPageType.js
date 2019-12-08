const { GraphQLObjectType, GraphQLBoolean, GraphQLList } = require('graphql');

const { UserInfoType } = require('./UserInfoType');
const { PostCardType } = require('./PostCardType');

const UserPageType = new GraphQLObjectType({
  name: 'userPage',
  fields: () => ({
    isExistingUser: {
      type: GraphQLBoolean,
      resolve: data => data.isExistingUser,
    },
    userInfo: {
      type: UserInfoType,
      resolve: data => data.userInfo,
    },
    postCard: {
      type: new GraphQLList(PostCardType),
      resolve: data => data.postCard,
    },
  }),
});

module.exports = { UserPageType };
