const { GraphQLString, GraphQLObjectType } = require('graphql');

const PostCardType = new GraphQLObjectType({
  name: 'postCard',
  fields: () => ({
    postURL: {
      type: GraphQLString,
      resolve: post => {
        return post.postURL;
      },
    },
    imageURL: {
      type: GraphQLString,
      resolve: post => post.imageURL,
    },
  }),
});

module.exports = { PostCardType };
