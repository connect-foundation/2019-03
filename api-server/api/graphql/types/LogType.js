const { GraphQLObjectType, GraphQLString } = require('graphql');
const { AlarmFromUserType } = require('./AlarmFromUserType');
const { AlarmPostType } = require('./AlarmPostType');
const { User, Post } = require('../../../db');

const LogType = new GraphQLObjectType({
  name: 'Log',
  fields: () => ({
    status: {
      type: GraphQLString,
      resolve: log => log.status,
    },
    fromUser: {
      type: AlarmFromUserType,
      resolve: log => {
        return User.findOne({
          attributes: ['id', 'username', 'profileImage'],
          where: { id: log.From },
        });
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
