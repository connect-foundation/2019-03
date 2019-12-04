const alarmQuery = id => {
  return `
    {
        log(id: ${id}) {
          status
        fromUser{
          username
          profileImage
        }
        post{
          postURL
          imageURL
        }
      }
    }
    `;
};

const searchQuery = value => {
  return `{
    searchUser(id: "${value}"){
      type
      username
      name
      profileImage
    }
    searchHashtag(id: "${value}") {
      type
      name
    }
  }`;
};

module.exports = { alarmQuery, searchQuery };
