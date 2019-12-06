const { GraphQLString } = require('graphql');

const { UserPageType } = require('../types');
const { Post, User } = require('../../../db');

const userPageQuery = {
  type: UserPageType,
  args: {
    writer: { type: GraphQLString },
  },
  resolve: async (post, args) => {
    try {
      const userCount = await User.count({ where: { username: args.writer } });
      const postCard = await Post.findAll({
        include: [
          {
            model: User,
            where: { username: args.writer },
          },
        ],
      });
      const data = { isExistingUser: !!userCount, postCard };
      return data;
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = { userPageQuery };
