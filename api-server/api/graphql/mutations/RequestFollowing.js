const { GraphQLID } = require('graphql');

const { UserFollower } = require('../types');
const { createFollowData } = require('../../services/following-service');

const RequestFollowing = {
  type: UserFollower,
  args: {
    myId: { type: GraphQLID },
    userId: { type: GraphQLID },
  },
  resolve: async (_, args) => {
    const userFollower = await createFollowData(args);
    return userFollower;
  },
};

module.exports = {
  RequestFollowing,
};
