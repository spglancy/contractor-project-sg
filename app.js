const express = require('express');
const app = express();
var exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const Post = require('./models/post.js');
const Comments = require('./models/comments.js');

const port = process.env.PORT || 3000;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rotten-potatoes');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

const commentController = require('./controllers/commentController.js');
const postController = require('./controllers/postController.js');

postController(app);
commentController(app);

app.listen(port, () => {
  console.log('App listening on port 3000!')
})

module.exports = app;
