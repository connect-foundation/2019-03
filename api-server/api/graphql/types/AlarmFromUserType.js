const { GraphQLObjectType, GraphQLString } = require('graphql');

const AlarmFromUserType = new GraphQLObjectType({
  name: 'alarmFromUser',
  fields: () => ({
    username: {
      type: GraphQLString,
      resolve: user => user.username,
    },
    profileImage: {
      type: GraphQLString,
      resolve: user => user.profileImage,
    },
  }),
});

module.exports = { AlarmFromUserType };
