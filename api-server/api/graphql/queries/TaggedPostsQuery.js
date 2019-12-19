const { GraphQLString, GraphQLInt, GraphQLList } = require('graphql');

const { PostType } = require('../types');
const { getTaggedPosts } = require('../../services/post-service');

const taggedPostsQuery = {
  type: new GraphQLList(PostType),
  args: {
    username: { type: GraphQLString },
    myId: { type: GraphQLInt },
  },
  resolve: async (_, { username }) => {
    const taggedPosts = await getTaggedPosts(username);
    return taggedPosts;
  },
};

module.exports = { taggedPostsQuery };
