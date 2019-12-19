const { HashTag, HashTagsOfPost, Sequelize } = require('../../db');
const { errorName } = require('../../error');

const { Op } = Sequelize;

const getHashTags = id => {
  try {
    return HashTag.findAll({
      where: { name: { [Op.like]: `%${id}%` } },
      limit: 10,
    });
  } catch (err) {
    throw new Error(errorName.HASHTAGS_QUERY_ERROR);
  }
};

const getHashTagId = async name => {
  const hashTagId = await HashTag.findOne({
    attributes: ['id'],
    where: { name },
  });
  return hashTagId;
};

const getPostIds = async hashTagId => {
  const postIds = await HashTagsOfPost.findAll({
    attributes: ['PostId'],
    where: {
      HashTagId: hashTagId.id,
    },
    order: [['updatedAt', 'DESC']],
  });
  return postIds;
};

const getHashTagPageData = async args => {
  try {
    const name = args.hashTagName;
    const hashTagId = await getHashTagId(name);
    let data = { isExistingHashTag: !!hashTagId, postIds: [] };
    if (hashTagId) {
      const postIds = await getPostIds(hashTagId);
      data = { ...data, postIds };
    }
    return data;
  } catch (err) {
    throw new Error(errorName.HASHTAG_QUERY_ERROR);
  }
};

const makeHashTagArray = content => {
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
};

const insertHashTagOfPost = async (content, postId) => {
  try {
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
  } catch (err) {
    throw new Error(errorName.HASHTAG_INSERT_ERROR);
  }
};

module.exports = { getHashTags, getHashTagPageData, insertHashTagOfPost };
