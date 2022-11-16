const { Schema, model } = require('mongoose');
// const thoughtSchema = require('./Thought');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thougthText: {
      type: String,
      required: true,
      max_length: 2800,
    },
    createdAt: {
      type: Date,
      deafult: Date.now,
    },
    username: {
      type: String,
      required: true,
      max_length: 280,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
