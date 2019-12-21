const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
  GraphQLID,
  GraphQLBoolean,
} = require('graphql');

const {
  checkUserLikePost,
  getLikerInfo,
} = require('../../services/post-like-service');
const {
  getCommentCount,
  getTwoComments,
} = require('../../services/comment-service');

const { LikerInfoType } = require('./LikerInfoType');
const { UserType } = require('./UserType');
const { CommentType } = require('./CommentType');
const { User } = require('../../../db');

const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: {
      type: GraphQLID,
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
      resolve: async ({ id: PostId }, _, context) => {
        const isLike = await checkUserLikePost(context.UserId, PostId);
        return isLike;
      },
    },
    commentCount: {
      type: GraphQLInt,
      resolve: async ({ id: PostId }) => {
        const commentCount = await getCommentCount(PostId);
        return commentCount;
      },
    },
    commentList: {
      type: new GraphQLList(CommentType),
      resolve: async ({ id: PostId }) => {
        const twoComments = await getTwoComments(PostId);
        return twoComments;
      },
    },
    likerInfo: {
      type: LikerInfoType,
      resolve: async ({ id: PostId }) => {
        const likerInfo = await getLikerInfo(PostId);
        return likerInfo;
      },
    },
  }),
});

module.exports = { PostType };
