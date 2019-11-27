const { GraphQLObjectType, GraphQLInt } = require('graphql');
const { AlarmFromUserType } = require('./AlarmFromUserType');
const { AlarmPostType } = require('./AlarmPostType');
const { User, Post } = require('../../../db');

const LogType = new GraphQLObjectType({
  name: 'Log',
  fields: () => ({
    status: {
      type: GraphQLInt,
      resolve: log => log.status,
    },
    fromUser: {
      type: AlarmFromUserType,
      resolve: log => {
        return User.findOne({ where: { id: log.From } });
      },
    },
    post: {
      type: AlarmPostType,
      resolve: log => {
        return Post.findOne({ where: { id: log.PostId } });
      },
    },
  }),
});

module.exports = { LogType };
