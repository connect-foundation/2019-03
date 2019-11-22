module.exports = {
  up: (queryInterface, Sequelize) => {
    const userInfo = [
      {
        username: '_so_02',
        password: 'password',
        email: 'hana@gmail.com',
        name: '정소영',
        cellPhone: '000-0000-0000',
        profileImage: 'https://i.pravatar.cc/150?img=50',
        isPrivate: 0,
        isFacebook: 0,
        isDeveloper: 0,
        updatedAt: new Date(),
      },
    ];

    const korean = [
      '남',
      '정',
      '호',
      '정',
      '소',
      '영',
      '김',
      '재',
      '현',
      '전',
      '형',
      '진',
    ];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 100; i++) {
      userInfo.push({
        username: `_${Math.random()
          .toString(36)
          .substr(2, 9)}`,
        password: `_${Math.random()
          .toString(36)
          .substr(2, 11)}`,
        email: 'hana@gmail.com',
        name: `${korean[Math.floor(Math.random() * korean.length)]}${
          korean[Math.floor(Math.random() * korean.length)]
        }${korean[Math.floor(Math.random() * korean.length)]}`,
        cellPhone: '000-0000-0000',
        profileImage: `https://i.pravatar.cc/150?img=${i}`,
        isPrivate: 0,
        isFacebook: 0,
        isDeveloper: 0,
        updatedAt: new Date(),
      });
    }
    return queryInterface.bulkInsert('users', userInfo, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', {});
  },
};
