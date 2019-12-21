const {
  Sequelize: { Op },
  User,
} = require('../../db');
const { errorName } = require('../../error');

const getRandomList = async () => {
  try {
    const userCount = await User.count();
    const getRandomNum = () => Math.floor(Math.random() * userCount) + 1;
    const randomList = Array.from(Array(5)).map(() => getRandomNum());
    return randomList;
  } catch (err) {
    throw new Error(errorName.RANDOM_QUERY_ERROR);
  }
};

const getIdList = async randomList => {
  try {
    const randomDataList = await User.findAll({
      attributes: ['id', 'username', 'name', 'profileImage'],
      where: { id: { [Op.in]: randomList } },
    });
    return randomDataList;
  } catch (err) {
    throw new Error(errorName.RANDOM_QUERY_ERROR);
  }
};

const getRandomSuggestion = async () => {
  const randomList = await getRandomList();
  const randomUserInfoList = await getIdList(randomList);
  return randomUserInfoList;
};

module.exports = { getRandomSuggestion };
