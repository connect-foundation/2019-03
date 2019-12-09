const { GraphQLInt } = require('graphql');

const { UserFollower } = require('../types');
const { UserFollow } = require('../../../db');

const RequestFollowingCancellation = {
  type: UserFollower,
  args: {
    myId: { type: GraphQLInt },
    userId: { type: GraphQLInt },
  },
  resolve: async (obj, { myId, userId }) => {
    const userFollowerCancellation = await UserFollow.destroy({
      where: {
        from: myId,
        to: userId,
      },
    });
    return userFollowerCancellation;
  },
};

module.exports = {
  RequestFollowingCancellation,
};
