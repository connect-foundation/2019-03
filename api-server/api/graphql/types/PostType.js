const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
} = require('graphql');

const {
  getLikerInfo,
  checkUserLikePost,
} = require('../../services/PostService');

const {
  getCommentCount,
  getTwoComments,
} = require('../../services/CommentService');

const { LikerInfoType } = require('./LikerInfoType');
const { UserType } = require('./UserType');
const { CommentType } = require('./CommentType');
const { User } = require('../../../db');

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: {
      type: GraphQLInt,
    },
    postURL: {
      type: GraphQLString,
    },
    imageURL: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    updatedAt: {
      type: GraphQLString,
    },
    UserId: {
      type: GraphQLID,
    },
    writer: {
      type: UserType,
      resolve: ({ UserId }) => User.findByPk(UserId),
    },
    isLike: {
      type: GraphQLBoolean,
      resolve: ({ id: PostId }, _, context) => {
        try {
          const isLike = checkUserLikePost(context.UserId, PostId);
          return isLike;
        } catch (err) {
          return { error: err.message };
        }
      },
    },
    commentCount: {
      type: GraphQLInt,
      resolve: async ({ id: PostId }) => {
        try {
          const commentCount = await getCommentCount(PostId);
          return commentCount;
        } catch (err) {
          return { error: err.message };
        }
      },
    },
    commentList: {
      type: new GraphQLList(CommentType),
      resolve: async ({ id: PostId }) => {
        try {
          const twoComments = await getTwoComments(PostId);
          return twoComments;
        } catch (err) {
          return { error: err.message };
        }
      },
    },
    likerInfo: {
      type: LikerInfoType,
      resolve: async ({ id: PostId }) => {
        try {
          const likerInfo = await getLikerInfo(PostId);
          return likerInfo;
        } catch (err) {
          return { error: err.message };
        }
      },
    },
  }),
});

module.exports = { PostType };
