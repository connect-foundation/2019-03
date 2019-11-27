const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLBoolean,
} = require('graphql');
const {
  getCommentCount,
  getTwoComments,
  getLikerInfo,
  checkUserLikePost,
} = require('../../services/PostService');
const { LikerInfoType } = require('./LikerInfoType');
const { WriterType } = require('./WriterType');
const { CommentType } = require('./CommentType');

const PostType = new GraphQLObjectType({
  name: 'PostType',
  fields: () => ({
    id: {
      type: GraphQLInt,
    },
    imageURL: {
      type: GraphQLString,
    },
    postURL: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    updatedAt: {
      type: GraphQLString,
    },
    writer: {
      type: WriterType,
      resolve: ({ User }) => User,
    },
    isLike: {
      type: GraphQLBoolean,
      resolve: ({ id: postId }, _, context) => {
        try {
          const { userId } = context;
          const isLike = checkUserLikePost(userId, postId);
          return isLike;
        } catch (err) {
          return { error: err.message };
        }
      },
    },
    commentCount: {
      type: GraphQLInt,
      resolve: async ({ id: postId }) => {
        try {
          const commentCount = await getCommentCount(postId);
          return commentCount;
        } catch (err) {
          return { error: err.message };
        }
      },
    },
    commentList: {
      type: new GraphQLList(CommentType),
      resolve: async ({ id: postId }) => {
        try {
          const twoComments = await getTwoComments(postId);
          return twoComments;
        } catch (err) {
          return { error: err.message };
        }
      },
    },
    likerInfo: {
      type: LikerInfoType,
      resolve: async ({ id: postId }) => {
        try {
          const likerInfo = await getLikerInfo(postId);
          return likerInfo;
        } catch (err) {
          return { error: err.message };
        }
      },
    },
  }),
});

module.exports = { PostType };
