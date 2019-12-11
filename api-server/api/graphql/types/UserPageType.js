const { GraphQLObjectType, GraphQLBoolean, GraphQLList } = require('graphql');

const { UserInfoType } = require('./UserInfoType');
const { PostType } = require('./PostType');

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
      type: new GraphQLList(PostType),
      resolve: data => data.postCard,
    },
  }),
});

module.exports = { UserPageType };
