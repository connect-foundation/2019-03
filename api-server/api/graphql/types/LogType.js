const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');
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
      type: GraphQLInt,
      resolve: log => log.id,
    },
    status: {
      type: GraphQLString,
      resolve: log => log.status,
    },
    fromUser: {
      type: AlarmFromUserType,
      resolve: log => {
        if (log.status === 'follow') {
          return getFollowStatusUserInfo(log);
        }
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
