const { GraphQLString } = require('graphql');

const { HashTagPageType } = require('../types');
const { getHashTagPageData } = require('../../services/hashtag-service');

const hashTagPageQuery = {
  type: HashTagPageType,
  args: {
    hashTagName: { type: GraphQLString },
  },
  resolve: async (_, args) => {
    const data = await getHashTagPageData(args);
    return data;
  },
};

module.exports = { hashTagPageQuery };
