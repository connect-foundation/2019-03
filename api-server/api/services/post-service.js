const short = require('short-uuid');

const { Sequelize, User, Post, UserFollow, UserTag } = require('../../db');
const { errorName } = require('../../error');
const { uploadImageFileToS3 } = require('../../utils/upload');
const hashtagService = require('../services/hashtag-service');
const usertagService = require('../services/usertag-service');

const { Op } = Sequelize;

const getFollowingPostList = async (userId, cursor, limit = 10) => {
  try {
    const result = await UserFollow.findAll({
      attributes: ['to'],
      where: { from: userId },
    });
    const followingList = [userId, ...result.map(f => f.to)];
    const options = {
      include: {
        model: User,
        attributes: ['id', 'username', 'profileImage'],
        where: {
          id: {
            [Op.in]: followingList,
          },
        },
      },
      where: {},
      limit,
      order: [['updatedAt', 'DESC']],
    };

    if (cursor) {
      options.where.updatedAt = {
        [Op.lt]: new Date(+cursor),
      };
    }

    const postList = await Post.findAll(options);
    return postList;
  } catch (err) {
    throw new Error(errorName.FOLLOWING_POST_QUERY_ERROR);
  }
};

const isErrorOfTagInsertion = ({ message }) => {
  return (
    message === 'USERTAG_INSERT_ERROR' || message === 'HASHTAG_INSERT_ERROR'
  );
};

const insertPost = async (file, postInfo) => {
  try {
    const imageFile = await uploadImageFileToS3(file, 'post');
    const result = await Post.create({
      imageURL: imageFile.Location,
      postURL: short.generate(),
      content: postInfo.content,
      updatedAt: new Date(),
      UserId: postInfo.userId,
    });

    const postId = result.dataValues.id;
    hashtagService.insertHashTagOfPost(postInfo.content, postId);
    usertagService.insertUserTag(postInfo.content, postId);
    return result.dataValues;
  } catch (err) {
    if (isErrorOfTagInsertion) throw err;
    throw new Error(errorName.POST_INSERT_ERROR);
  }
};

const deletePost = async postURL => {
  try {
    await Post.destroy({
      where: {
        postURL,
      },
    });
  } catch (err) {
    throw new Error(errorName.POST_DELETE_ERROR);
  }
};

async function updatePostInfo(content, id) {
  try {
    await Post.update(
      { content },
      {
        where: {
          id,
        },
      },
    );
    await hashtagService.insertHashTagOfPost(content, id);
    await usertagService.insertUserTag(content, id);
    return { id, content };
  } catch (err) {
    throw new Error(errorName.POST_UPDATE_ERROR);
  }
}

const getPostDetail = (id, postURL) => {
  try {
    if (id) return Post.findByPk(id);
    return Post.findOne({
      where: { postURL },
    });
  } catch (err) {
    throw new Error(errorName.POST_DETAIL_QUERY_ERROR);
  }
};

const getTaggedPosts = async username => {
  try {
    const taggedPosts = await UserTag.findAll({
      attributes: ['postId'],
      where: { username },
    });
    const taggedPostIdList = taggedPosts.map(
      taggedPost => taggedPost.dataValues.postId,
    );
    const taggedPostsInfo = await Post.findAll({
      attributes: ['postURL', 'imageURL'],
      where: { id: { [Op.in]: taggedPostIdList } },
      order: [['updatedAt', 'DESC']],
    });
    return taggedPostsInfo;
  } catch (err) {
    throw new Error(errorName.TAGGED_POSTS_QUERY_ERROR);
  }
};

module.exports = {
  getFollowingPostList,
  insertPost,
  deletePost,
  getPostDetail,
  getTaggedPosts,
  updatePostInfo,
};
