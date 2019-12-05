const { GraphQLObjectType, GraphQLString } = require('graphql');

const SearchType = new GraphQLObjectType({
  name: 'Search',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: search => search.id,
    },
    username: {
      type: GraphQLString,
      resolve: search => search.username,
    },
    name: {
      type: GraphQLString,
      resolve: search => search.name,
    },
    profileImage: {
      type: GraphQLString,
      resolve: user => user.profileImage,
    },
  }),
});

module.exports = { SearchType };
