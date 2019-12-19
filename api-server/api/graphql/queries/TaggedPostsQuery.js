const { GraphQLString, GraphQLInt, GraphQLList } = require('graphql');

const { PostType } = require('../types');
const {
  Sequelize: { Op },
  Post,
  UserTag,
} = require('../../../db');

const taggedPostsQuery = {
  type: new GraphQLList(PostType),
  args: {
    username: { type: GraphQLString },
    myId: { type: GraphQLInt },
  },
  resolve: async (_, { username, myId }) => {
    try {
      const taggedPosts = await UserTag.findAll({
        attributes: ['postId'],
        where: { username },
      });
      const taggedPostIdList = taggedPosts.map(
        taggedPost => taggedPost.dataValues.postId,
      );
      const taggedPostsInfo = await Post.findAll({
        attributes: ['postURL', 'imageURL'],
        where: { id: { [Op.in]: taggedPostIdList } },
        order: [['updatedAt', 'DESC']],
      });
      return taggedPostsInfo;
    } catch (e) {
      console.log(e.message);
      return { error: e.message };
    }
  },
};

module.exports = { taggedPostsQuery };
