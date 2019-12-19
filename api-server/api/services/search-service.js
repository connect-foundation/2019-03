const { sequelize, Sequelize, User } = require('../../db');
const { errorName } = require('../../error');

const { Op } = Sequelize;

const searchUsersAndHashTags = value => {
  try {
    const query = `
    ((SELECT id, username, name, profileImage FROM Users WHERE username like :search_value or name like :search_value limit 10)
    union all (SELECT id, null, name as name, null FROM HashTags WHERE name like :search_value limit 10)) ORDER BY CASE 
    WHEN name LIKE :first THEN 1 
    WHEN name LIKE :second THEN 2 
    WHEN name LIKE :last THEN 4 
    ELSE 3 
    END
    `;
    return sequelize.query(query, {
      replacements: {
        search_value: `%${value}%`,
        first: `${value}`,
        second: `${value}%`,
        last: `%${value}`,
      },
      type: sequelize.QueryTypes.SELECT,
    });
  } catch (err) {
    throw new Error(errorName.USERS_AND_HASHTAGS_SEARCH_ERROR);
  }
};

const searchUsers = id => {
  try {
    return User.findAll({
      where: {
        [Op.or]: [
          { username: { [Op.like]: `%${id}%` } },
          { name: { [Op.like]: `%${id}%` } },
        ],
      },
      limit: 10,
    });
  } catch (err) {
    throw new Error(errorName.USERS_SEARCH_ERROR);
  }
};

module.exports = { searchUsersAndHashTags, searchUsers };
