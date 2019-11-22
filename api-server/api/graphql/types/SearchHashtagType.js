const { GraphQLObjectType, GraphQLString } = require('graphql');

const SearchHashtagType = new GraphQLObjectType({
  name: 'Hashtag',
  fields: () => ({
    type: {
      type: GraphQLString,
      resolve: () => 'hastag',
    },
    name: {
      type: GraphQLString,
      resolve: hashtag => hashtag.name,
    },
  }),
});

module.exports = { SearchHashtagType };
