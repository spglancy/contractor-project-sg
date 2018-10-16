const mongoose = require('mongoose');
const comment = require('./comments')
mongoose.connect('mongodb://localhost/contracto-project', {useNewUrlParser: true});

const Post = mongoose.model('Post', {
  title: String,
  content: String
});

module.exports = Post;
