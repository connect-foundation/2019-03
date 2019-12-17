const { HashTag, HashTagsOfPost } = require('../../db');

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
  const name = args.hashTagName;
  const hashTagId = await getHashTagId(name);
  let data = { isExistingHashTag: !!hashTagId, postIds: [] };
  if (hashTagId) {
    const postIds = await getPostIds(hashTagId);
    data = { ...data, postIds };
  }
  return data;
};

module.exports = { getHashTagPageData };
