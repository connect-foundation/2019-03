const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql');
const { AlarmFromUserType } = require('./AlarmFromUserType');
const { AlarmPostType } = require('./AlarmPostType');
const { Post } = require('../../../db');
const {
  getFollowStatusUserInfo,
  getOtherStatusUserInfo,
} = require('../../services/LogService');

const LogType = new GraphQLObjectType({
  name: 'Log',
  fields: () => ({
    id: {
      type: GraphQLID,
      resolve: log => log.id,
    },
    status: {
      type: GraphQLString,
      resolve: log => log.status,
    },
    fromUser: {
      type: AlarmFromUserType,
      resolve: async log => {
        let user;
        if (log.status === 'follow') {
          user = await getFollowStatusUserInfo(log);
        }
        if (user) return user;
        return getOtherStatusUserInfo(log);
      },
    },
    post: {
      type: AlarmPostType,
      resolve: log => {
        return Post.findOne({
          attributes: ['id', 'postURL', 'imageURL'],
          where: { id: log.PostId },
        });
      },
    },
  }),
});

module.exports = { LogType };
