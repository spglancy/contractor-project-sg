const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
const Comment = require('../models/comments');

chai.use(chaiHttp);

const sampleComment =    {
    "content": "asdf"
}

after(() => {
Comment.deleteMany({content: 'asdf'}).exec((err, comment) => {
  console.log(post)
  Post.remove();
})
});

it('should post comment to /posts/comments', (done) => {
  chai.request(server)
      .post('/posts/comments')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.html;
        done();
      });
});

it('should delete comment at /posts/comments/:id', (done) => {
    var comment = new Comment(sampleComment);
    comment.save((err, data) => {
  chai.request(server)
      .delete(`/posts/comments/${data._id}?_method=DELETE`)
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.html;
        done();
      });
});
});
