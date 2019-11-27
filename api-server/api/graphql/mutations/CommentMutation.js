const { GraphQLString, GraphQLInt, GraphQLNonNull } = require('graphql');

const { CommentType } = require('../types');
const { Note } = require('../../models');

const createNote = {
  type: NoteType,
  description: 'The mutation that allows you to create a new Note',
  args: {
    userId: {
      name: 'userId',
      type: new GraphQLNonNull(GraphQLInt),
    },
    note: {
      name: 'note',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: (value, { userId, note }) =>
    Note.create({
      userId,
      note,
    }),
};

module.exports = {
  createNote,
};
