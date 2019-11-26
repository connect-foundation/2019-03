const alarmQuery = username => {
  return `
    {
        log(username: "${username}" ) {
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

module.exports = { alarmQuery };
