const { GraphQLInt } = require('graphql');

const { UserFollower } = require('../types');
const {
  destroyFollowCancellationData,
} = require('../../services/RequestFollowingCancellationService');

const RequestFollowingCancellation = {
  type: UserFollower,
  args: {
    myId: { type: GraphQLInt },
    userId: { type: GraphQLInt },
  },
  resolve: async (_, args) => {
    try {
      const userFollowerCancellation = await destroyFollowCancellationData(
        args,
      );
      return userFollowerCancellation;
    } catch (e) {
      console.log(e.message);
      return { error: e.message };
    }
  },
};

module.exports = {
  RequestFollowingCancellation,
};
