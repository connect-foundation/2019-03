const { GraphQLInt } = require('graphql');

const { UserFollower } = require('../types');
const { UserFollow } = require('../../../db');

const RequestFollowing = {
  type: UserFollower,
  args: {
    myId: { type: GraphQLInt },
    userId: { type: GraphQLInt },
  },
  resolve: async (obj, { myId, userId }) => {
    console.log('Im resolver');
    const userFollower = await UserFollow.create({
      from: myId,
      to: userId,
      status: 0,
      updatedAt: new Date(),
    });
    return userFollower;
  },
};

module.exports = {
  RequestFollowing,
};
