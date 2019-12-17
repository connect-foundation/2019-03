const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');

const UserFollower = new GraphQLObjectType({
  name: 'UserFollower',
  fields: () => ({
    from: {
      type: GraphQLInt,
      resolve: user => user.from,
    },
    to: {
      type: GraphQLInt,
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
