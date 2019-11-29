const { GraphQLSchema, GraphQLObjectType } = require('graphql');
const {
  searchUserQuery,
  searchHashtagQuery,
  postDetailQuery,
  commentQuery,
  logQuery,
  followingPostListQuery,
  likerListQuery,
  postCardQuery,
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
    searchUser: searchUserQuery,
    searchHashtag: searchHashtagQuery,
    post: postDetailQuery,
    commentList: commentQuery,
    log: logQuery,
    followingPostList: followingPostListQuery,
    likerList: likerListQuery,
    postCard: postCardQuery,
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
