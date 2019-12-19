const { GraphQLID } = require('graphql');

const { UserFollower } = require('../types');
const {
  destroyFollowCancellationData,
} = require('../../services/RequestFollowingCancellationService');

const RequestFollowingCancellation = {
  type: UserFollower,
  args: {
    myId: { type: GraphQLID },
    userId: { type: GraphQLID },
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
