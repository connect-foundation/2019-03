const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const {
  postDetailQuery,
  commentQuery,
  logQuery,
  followingPostListQuery,
  likerListQuery,
  searchQuery,
  userPageQuery,
} = require('./queries');
const {
  createComment,
  createPostLike,
  deletePostLike,
  createCommentLike,
  deleteCommentLike,
} = require('./mutations');

const rootQuery = new GraphQLObjectType({
  name: 'rootQuery',
  fields: () => ({
    search: searchQuery,
    post: postDetailQuery,
    commentList: commentQuery,
    log: logQuery,
    followingPostList: followingPostListQuery,
    likerList: likerListQuery,
    userPage: userPageQuery,
  }),
});

const rootMutation = new GraphQLObjectType({
  name: 'rootMutation',
  fields: () => ({
    createComment,
    createPostLike,
    deletePostLike,
    createCommentLike,
    deleteCommentLike,
  }),
});

const schema = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation,
});

module.exports = { schema };
