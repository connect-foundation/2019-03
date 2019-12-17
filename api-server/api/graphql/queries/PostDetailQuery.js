const { GraphQLString, GraphQLID } = require('graphql');

const { PostType } = require('../types');
const { Post } = require('../../../db');

const postDetailQuery = {
  type: PostType,
  args: {
    id: { type: GraphQLID },
    UserId: { type: GraphQLID },
    postURL: { type: GraphQLString },
  },
  resolve: (_, { id, UserId, postURL }, context) => {
    // eslint-disable-next-line no-param-reassign
    context.UserId = UserId;
    if (id) return Post.findByPk(id);
    return Post.findOne({
      where: { postURL },
    });
  },
};

module.exports = { postDetailQuery };
