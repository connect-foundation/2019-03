const { GraphQLString, GraphQLList } = require('graphql');

const { SearchHashtagType } = require('../types/SearchHashtagType');
const { HashTag, Sequelize } = require('../../../db');

const { Op } = Sequelize;

const searchHashtagQuery = {
  type: new GraphQLList(SearchHashtagType),
  args: {
    id: { type: GraphQLString },
  },
  resolve: (hashtag, args) => {
    return HashTag.findAll({
      where: { name: { [Op.like]: `%${args.id}%` } },
    });
  },
};

module.exports = { searchHashtagQuery };