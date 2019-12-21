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
  followerListQuery,
  followListQuery,
  taggedPostsQuery,
  clientQuery,
  randomListQuery,
  likerInfoListQuery,
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
  updateProfile,
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
    followerList: followerListQuery,
    followList: followListQuery,
    taggedPosts: taggedPostsQuery,
    client: clientQuery,
    randomList: randomListQuery,
    likerInfoList: likerInfoListQuery,
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
    updateProfile,
  }),
});

const schema = new GraphQLSchema({
  query: rootQuery,
  mutation: rootMutation,
});

module.exports = { schema };
