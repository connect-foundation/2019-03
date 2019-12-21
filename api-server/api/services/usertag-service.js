const { UserTag } = require('../../db');

const makeUserArray = content => {
  const allWords = content.split(' ');
  const userIncludedWords = allWords.filter(word => {
    return word.includes('@');
  });
  const users = userIncludedWords.reduce((acc, cur) => {
    const regexp = /@[\S][^@]*/g;
    const username = cur.match(regexp);

    return [...acc, ...username];
  }, []);

  return users;
};

const insertUserTag = async (content, postId) => {
  const users = makeUserArray(content);
  if (users.length === 0) return;
  users.forEach(async element => {
    await UserTag.create({
      username: element.substring(1, element.length),
      PostId: postId,
      updatedAt: new Date(),
    });
  });
};

module.exports = { insertUserTag };
