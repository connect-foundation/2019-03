const { GraphQLID } = require('graphql');

const { UserFollower } = require('../types');
const {
  destroyFollowCancellationData,
} = require('../../services/following-service');

const RequestFollowingCancellation = {
  type: UserFollower,
  args: {
    myId: { type: GraphQLID },
    userId: { type: GraphQLID },
  },
  resolve: async (_, args) => {
    const userFollowerCancellation = await destroyFollowCancellationData(args);
    return userFollowerCancellation;
  },
};

module.exports = {
  RequestFollowingCancellation,
};
