const { GraphQLString, GraphQLList } = require('graphql');
const { SearchType } = require('../types');
const { Sequelize, sequelize } = require('../../../db');

const { Op } = Sequelize;

const searchQuery = {
  type: new GraphQLList(SearchType),
  args: {
    value: { type: GraphQLString },
  },
  resolve: (search, args) => {
    const query = `
    ((SELECT id, username, name, profileImage FROM Users WHERE username like :search_value or name like :search_value limit 10)
    union all (SELECT id, null, name as name, null FROM Hashtags WHERE name like :search_value limit 10)) ORDER BY CASE 
    WHEN name LIKE :first THEN 1 
    WHEN name LIKE :second THEN 2 
    WHEN name LIKE :last THEN 4 
    ELSE 3 
    END
    `;
    return sequelize.query(query, {
      replacements: {
        search_value: `%${args.value}%`,
        first: `${args.value}`,
        second: `${args.value}%`,
        last: `%${args.value}`,
      },
      type: sequelize.QueryTypes.SELECT,
    });
  },
};

module.exports = { searchQuery };
