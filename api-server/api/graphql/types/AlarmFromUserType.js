const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql');
const { UserFollower } = require('./UserFollower');

const AlarmFromUserType = new GraphQLObjectType({
  name: 'alarmFromUser',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    username: {
      type: GraphQLString,
      resolve: user => user.username,
    },
    profileImage: {
      type: GraphQLString,
      resolve: user => user.profileImage,
    },
    follow: {
      type: UserFollower,
      resolve: user => {
        if (!user.UserFollows) return { status: null };
        return user.UserFollows[0];
      },
    },
  }),
});

module.exports = { AlarmFromUserType };
