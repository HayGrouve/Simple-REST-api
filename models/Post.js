const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  title: String,
  desc: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Post', PostSchema);
