const { GraphQLInt } = require('graphql');

const { UserFollower } = require('../types');
const { createFollowData } = require('../../services/RequestFollowingService');

const RequestFollowing = {
  type: UserFollower,
  args: {
    myId: { type: GraphQLInt },
    userId: { type: GraphQLInt },
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
