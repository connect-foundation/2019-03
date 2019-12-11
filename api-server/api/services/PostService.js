const {
  Sequelize,
  User,
  Post,
  UserFollow,
  PostLike,
  HashTagsOfPost,
  HashTag,
  UserTag,
} = require('../../db');

const { Op } = Sequelize;

const defaultLimitValue = 10;
async function getFollowingPostList(userId, cursor, limit = defaultLimitValue) {
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
}

async function checkUserLikePost(userId, postId) {
  const result = await PostLike.findOne({
    attributes: ['id'],
    where: {
      UserId: userId,
      PostId: postId,
    },
  });

  return result !== null;
}

async function getLikerInfo(postId) {
  const { rows, count } = await PostLike.findAndCountAll({
    attributes: ['id', 'updatedAt', 'UserId'],
    where: { PostId: postId },
    order: [['updatedAt', 'DESC']],
  });

  let likerInfo = {
    username: '',
    profileImage: '',
    likerCount: count,
  };

  if (rows.length === 0) return likerInfo;
  const { username, profileImage } = await User.findOne({
    attributes: ['username', 'profileImage'],
    where: { id: rows[0].UserId },
  });
  likerInfo = { ...likerInfo, username, profileImage };

  return likerInfo;
}

async function getLikerList(postId) {
  const likerList = await PostLike.findAll({
    attributes: ['id'],
    where: { PostId: postId },
    include: {
      model: User,
      attributes: ['username', 'name', 'profileImage'],
    },
    order: [['updatedAt', 'DESC']],
  });

  return likerList;
}

async function setPostLike(userId, postId) {
  await PostLike.create({
    UserId: userId,
    PostId: postId,
    updatedAt: new Date(),
  });
}

async function unsetPostLike(userId, postId) {
  await PostLike.destroy({
    where: { PostId: postId, UserId: userId },
  });
}

async function insertPost(file, postInfo) {
  try {
    const result = await Post.create({
      imageURL: file.location,
      postURL: file.etag,
      content: postInfo.content,
      updatedAt: new Date(),
      UserId: +postInfo.userId,
    });

    const postId = result.dataValues.id;
    insertHashTagOfPost(postInfo.content, postId);
    insertUserTag(postInfo.content, postId);
  } catch {}
}

async function insertUserTag(content, postId) {
  const users = makeUserArray(content);
  if (users.length === 0) return;
  users.forEach(async element => {
    await UserTag.create({
      username: element.substring(1, element.length),
      PostId: postId,
      updatedAt: new Date(),
    });
  });
}

function makeUserArray(content) {
  const allWords = content.split(' ');
  const userIncludedWords = allWords.filter(word => {
    return word.includes('@');
  });
  const users = userIncludedWords.reduce((acc, cur) => {
    const regexp = /@[\S][^@]*/g;
    const username = cur.match(regexp);

    return [...acc, ...username];
  }, []);

  return users;
}

function makeHashTagArray(content) {
  const allWords = content.split(' ');
  const hashTagIncludedWords = allWords.filter(word => {
    return word.includes('#');
  });
  const hashTags = hashTagIncludedWords.reduce((acc, cur) => {
    const regexp = /#[\S][^#]*/g;
    const hashTagWord = cur.match(regexp);

    return [...acc, ...hashTagWord];
  }, []);

  return hashTags;
}

async function insertHashTagOfPost(content, postId) {
  const hashTags = makeHashTagArray(content);
  if (hashTags.length === 0) return;
  hashTags.forEach(async element => {
    const hashTag = await HashTag.findOne({
      attributes: ['id'],
      where: {
        name: `${element.substring(1, element.length)}`,
      },
    });

    if (!hashTag) {
      const newHashTag = await HashTag.create({
        name: `${element.substring(1, element.length)}`,
        updatedAt: new Date(),
      });

      const newHashTagId = newHashTag.dataValues.id;
      HashTagsOfPost.create({
        PostId: postId,
        HashTagId: newHashTagId,
        updatedAt: new Date(),
      });
      return;
    }

    await HashTagsOfPost.create({
      PostId: postId,
      HashTagId: hashTag.dataValues.id,
      updatedAt: new Date(),
    });
  });
}

module.exports = {
  getFollowingPostList,
  checkUserLikePost,
  getLikerInfo,
  getLikerList,
  setPostLike,
  unsetPostLike,
  insertPost,
};
