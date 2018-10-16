var Comment = require('../models/comments.js');
const Post = require('../models/post.js');
module.exports = function(app){
    app.post('/posts/comments', (req, res) => {
       Comment.create(req.body).then(comment => {
           res.redirect(`/posts/${comment.postId}`);
       }).catch((err) => {
           console.log(err.message);
       })
   })
   app.delete('/posts/comments/:id', function (req, res) {
  console.log("DELETE comment")
  Comment.findByIdAndRemove(req.params.id).then((comment) => {
    res.redirect(`/posts/${comment.postId}`);
  }).catch((err) => {
    console.log(err.message);
  })
})
}
