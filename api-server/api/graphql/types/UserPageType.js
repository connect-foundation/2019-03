const { GraphQLObjectType, GraphQLBoolean, GraphQLList } = require('graphql');

const { PostCardType } = require('./PostCardType');

const UserPageType = new GraphQLObjectType({
  name: 'userPage',
  fields: () => ({
    isExistingUser: {
      type: GraphQLBoolean,
      resolve: data => data.isExistingUser,
    },
    postCard: {
      type: new GraphQLList(PostCardType),
      resolve: data => data.postCard,
    },
  }),
});

module.exports = { UserPageType };
