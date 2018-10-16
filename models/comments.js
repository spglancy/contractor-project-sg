const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rotten-potatoes');
const Schema = mongoose.Schema;

const Comment = mongoose.model('Comment', {
  content: String,
  postId: { type: Schema.Types.ObjectId, ref: 'Post' },
});

module.exports = Comment;
