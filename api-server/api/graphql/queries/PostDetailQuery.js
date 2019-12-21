const { GraphQLString, GraphQLID } = require('graphql');

const { PostType } = require('../types');
const { getPostDetail } = require('../../services/post-service');

const postDetailQuery = {
  type: PostType,
  args: {
    id: { type: GraphQLID },
    UserId: { type: GraphQLID },
    postURL: { type: GraphQLString },
  },
  resolve: async (_, { id, UserId, postURL }, context) => {
    // eslint-disable-next-line no-param-reassign
    context.UserId = UserId;
    const postDetail = await getPostDetail(id, postURL);
    return postDetail;
  },
};

module.exports = { postDetailQuery };
