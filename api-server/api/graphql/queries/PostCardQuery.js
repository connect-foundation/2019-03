const { GraphQLList, GraphQLString } = require('graphql');

const { PostCardType } = require('../types');
const { Post, User } = require('../../../db');

const postCardQuery = {
  type: new GraphQLList(PostCardType),
  args: {
    writer: { type: GraphQLString },
  },
  resolve: (post, args) => {
    return Post.findAll({
      include: [
        {
          model: User,
          where: { username: args.writer },
        },
      ],
    });
  },
};

module.exports = { postCardQuery };
