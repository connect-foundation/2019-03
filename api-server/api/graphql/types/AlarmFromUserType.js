const { GraphQLObjectType, GraphQLString } = require('graphql');
const { UserFollower } = require('./UserFollower');

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
    follow: {
      type: UserFollower,
      resolve: user => {
        if (!user.UserFollows) return null;
        return user.UserFollows[0];
      },
    },
  }),
});

module.exports = { AlarmFromUserType };
