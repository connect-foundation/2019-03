const { GraphQLID } = require('graphql');

const { UserFollower } = require('../types');
const { createFollowData } = require('../../services/RequestFollowingService');

const RequestFollowing = {
  type: UserFollower,
  args: {
    myId: { type: GraphQLID },
    userId: { type: GraphQLID },
  },
  resolve: async (_, args) => {
    try {
      const userFollower = await createFollowData(args);
      return userFollower;
    } catch (e) {
      console.log(e.message);
      return { error: e.message };
    }
  },
};

module.exports = {
  RequestFollowing,
};
