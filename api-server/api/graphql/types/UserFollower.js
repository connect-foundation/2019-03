const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
} = require('graphql');

const UserFollower = new GraphQLObjectType({
  name: 'UserFollower',
  fields: () => ({
    from: {
      type: GraphQLID,
      resolve: user => user.from,
    },
    to: {
      type: GraphQLID,
      resolve: user => user.to,
    },
    status: {
      type: GraphQLInt,
      resolver: user => user.status,
    },
    updatedAt: {
      type: GraphQLString,
      resolve: user => user.updatedAt,
    },
  }),
});

module.exports = { UserFollower };
