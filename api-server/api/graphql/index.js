const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const {
  postDetailQuery,
  commentQuery,
  logQuery,
  followingPostListQuery,
  likerListQuery,
  searchQuery,
  userPageQuery,
  hashTagPageQuery,
} = require('./queries');
const {
  updateUser,
  createComment,
  deletePost,
  createPostLike,
  deletePostLike,
  createCommentLike,
  deleteCommentLike,
  updatePost,
  RequestFollowing,
  RequestFollowingCancellation,
  createPost,
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
    hashTagPage: hashTagPageQuery,
  }),
});

const rootMutation = new GraphQLObjectType({
  name: 'rootMutation',
  fields: () => ({
    updateUser,
    deletePost,
    updatePost,
    createComment,
    createPostLike,
    deletePostLike,
    createCommentLike,
    deleteCommentLike,
    RequestFollowing,
    RequestFollowingCancellation,
    createPost,
  }),
});

const schema = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation,
});

module.exports = { schema };
