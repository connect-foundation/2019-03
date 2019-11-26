const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
} = require('graphql');
const { WriterType } = require('./index');
const { User, PostLike } = require('../../../db');

const PostDetailType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve: post => post.id,
    },
    content: {
      type: GraphQLString,
      resolve: post => post.content,
    },
    writer: {
      type: WriterType,
      resolve: post => {
        return User.findOne({ where: { id: post.UserId } });
      },
    },
    imageURL: {
      type: GraphQLString,
      resolve: post => post.imageURL,
    },
    postURL: {
      type: GraphQLString,
      resolve: post => post.postURL,
    },
    likeCount: {
      type: GraphQLInt,
      resolve: post => PostLike.count({ where: { PostId: post.id } }),
    },
  }),
});

module.exports = { PostDetailType };
