const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    // TODO: Keep these fields or adjust them as part of the exercise requirements.
    title: {
      type: String,
      required: true,
      trim: true
    },
    content: {
      type: String,
      required: true,
      trim: true
    },
    author: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Post', postSchema);