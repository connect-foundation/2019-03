const db = require('../../db');

const { queryInterface } = db.sequelize;

const usersData = [
  {
    id: 1,
    username: 'ss70',
    password: '123123',
    email: 'test1@test.com',
    name: '전형진',
    cellPhone: '010-1111-2222',
    profileImage: 'profile1',
    isPrivate: false,
    isFacebook: false,
    isDeveloper: false,
    updatedAt: new Date(),
  },
  {
    id: 2,
    username: 'ss32',
    password: '123123',
    email: 'test2@test.com',
    name: '남정호',
    cellPhone: '010-2222-3333',
    profileImage: 'profile2',
    isPrivate: false,
    isFacebook: false,
    isDeveloper: false,
    updatedAt: new Date(),
  },
  {
    id: 3,
    username: 'ss71',
    password: '123123',
    email: 'test3@test.com',
    name: '정소영',
    cellPhone: '010-3333-2222',
    profileImage: 'profile3',
    isPrivate: false,
    isFacebook: false,
    isDeveloper: false,
    updatedAt: new Date(),
  },
  {
    id: 4,
    username: 'ss23',
    password: '123123',
    email: 'test4@test.com',
    name: '김재현',
    cellPhone: '010-4444-2222',
    profileImage: 'profile4',
    isPrivate: false,
    isFacebook: false,
    isDeveloper: false,
    updatedAt: new Date(),
  },
];

const userFollowsData = [
  {
    from: 1,
    to: 2,
    status: 0,
    updatedAt: new Date(),
  },
  {
    from: 1,
    to: 3,
    status: 0,
    updatedAt: new Date(),
  },
  {
    from: 1,
    to: 4,
    status: 0,
    updatedAt: new Date(),
  },
  {
    from: 2,
    to: 1,
    status: 0,
    updatedAt: new Date(),
  },
];

const postsData = [
  {
    id: 1,
    UserId: 2,
    imageURL: 'post1',
    postURL: 'aaa',
    content: 'post1 입니다.',
    updatedAt: new Date(),
  },
  {
    id: 2,
    UserId: 2,
    imageURL: 'post2',
    postURL: 'bbb',
    content: 'post2 입니다.',
    updatedAt: new Date(),
  },
  {
    id: 3,
    UserId: 3,
    imageURL: 'post3',
    postURL: 'ccc',
    content: 'post3 입니다.',
    updatedAt: new Date(),
  },
  {
    id: 4,
    UserId: 2,
    imageURL: 'post4',
    postURL: 'ddd',
    content: 'post4 입니다.',
    updatedAt: new Date(),
  },
  {
    id: 5,
    UserId: 4,
    imageURL: 'post5',
    postURL: 'eee',
    content: 'post5 입니다.',
    updatedAt: new Date(),
  },
  {
    id: 6,
    UserId: 1,
    imageURL: 'post6',
    postURL: 'fff',
    content: 'post6 입니다.',
    updatedAt: new Date(),
  },
];

const postLikesData = [
  {
    id: 1,
    UserId: 1,
    PostId: 4,
    updatedAt: new Date(),
  },
  {
    id: 2,
    UserId: 1,
    PostId: 2,
    updatedAt: new Date(),
  },
  {
    id: 3,
    UserId: 1,
    PostId: 3,
    updatedAt: new Date(),
  },
  {
    id: 4,
    UserId: 2,
    PostId: 4,
    updatedAt: new Date(),
  },
  {
    id: 5,
    UserId: 3,
    PostId: 4,
    updatedAt: new Date(),
  },
  {
    id: 6,
    UserId: 4,
    PostId: 4,
    updatedAt: new Date(2012, 11, 17),
  },
  {
    id: 7,
    UserId: 1,
    PostId: 5,
    updatedAt: new Date(),
  },
  {
    id: 8,
    UserId: 1,
    PostId: 6,
    updatedAt: new Date(),
  },
];

const commentsData = [
  {
    id: 1,
    content: 'comment1-2',
    depth: '',
    UserId: 1,
    PostId: 2,
    updatedAt: new Date(),
  },
  {
    id: 2,
    content: 'comment2-3',
    depth: '',
    UserId: 2,
    PostId: 3,
    updatedAt: new Date(),
  },
  {
    id: 3,
    content: 'comment3-4',
    depth: '',
    UserId: 3,
    PostId: 4,
    updatedAt: new Date(),
  },
  {
    id: 4,
    content: 'comment1-4',
    depth: '',
    UserId: 1,
    PostId: 4,
    updatedAt: new Date(),
  },
  {
    id: 5,
    content: 'comment2-5',
    depth: '',
    UserId: 2,
    PostId: 5,
    updatedAt: new Date(),
  },
  {
    id: 6,
    content: 'comment4-1',
    depth: '',
    UserId: 4,
    PostId: 1,
    updatedAt: new Date(),
  },
];

const dbInit = async () => {
  // init test db;
  try {
    await queryInterface.bulkDelete('Users');
    await queryInterface.bulkDelete('Posts');
    await queryInterface.bulkDelete('PostLikes');
    await queryInterface.bulkDelete('UserFollows');
    await queryInterface.bulkDelete('Comments');

    await queryInterface.bulkInsert('Users', usersData);
    await queryInterface.bulkInsert('Posts', postsData);
    await queryInterface.bulkInsert('PostLikes', postLikesData);
    await queryInterface.bulkInsert('UserFollows', userFollowsData);
    await queryInterface.bulkInsert('Comments', commentsData);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { dbInit };
