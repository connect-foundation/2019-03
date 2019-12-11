const { GraphQLString } = require('graphql');

const { HashTagPageType } = require('../types');
const { getHashTagPageData } = require('../../services/HashTagPageService');

const hashTagPageQuery = {
  type: HashTagPageType,
  args: {
    hashTagName: { type: GraphQLString },
  },
  resolve: async (_, args) => {
    try {
      const data = await getHashTagPageData(args);
      return data;
    } catch (e) {
      console.log(e.message);
      return { error: e.message };
    }
  },
};

module.exports = { hashTagPageQuery };
