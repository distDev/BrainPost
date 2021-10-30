const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: false,
      unique: false,
    },
    desc: {
      type: String,
      required: false,
    },
    photo: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
    },
    body: [mongoose.Schema.Types.Mixed],
    categories: {
      type: Array,
      require: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', PostSchema);
