const { GraphQLString } = require('graphql');

const { HashTagPageType } = require('../types');
const { HashTag, HashTagsOfPost } = require('../../../db');

const hashTagPageQuery = {
  type: HashTagPageType,
  args: {
    hashTagName: { type: GraphQLString },
  },
  resolve: async (_, args) => {
    const name = args.hashTagName;
    try {
      const hashTagId = await HashTag.findOne({
        attributes: ['id'],
        where: { name },
      });
      let data = { isExistingHashTag: !!hashTagId, postIds: [] };
      if (hashTagId) {
        const postIds = await HashTagsOfPost.findAll({
          attributes: ['PostId'],
          where: {
            HashTagId: hashTagId.id,
          },
        });
        data = { ...data, postIds };
      }
      return data;
    } catch (e) {
      console.log(e.message);
      return { error: e.message };
    }
  },
};

module.exports = { hashTagPageQuery };
