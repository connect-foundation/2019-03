const { GraphQLObjectType, GraphQLString } = require('graphql');

const AlarmPostType = new GraphQLObjectType({
  name: 'alarmPost',
  fields: () => ({
    postURL: {
      type: GraphQLString,
      resolve: post => post.postURL,
    },
    imageURL: {
      type: GraphQLString,
      resolve: post => post.imageURL,
    },
  }),
});

module.exports = { AlarmPostType };
