/*eslint-env node */
var express = require('express');
var bodyParser = require('body-parser');
var Post = require('./models/post.js');

var app = express();
app.use(bodyParser.json());

app.get('/posts', function(req, res){
    res.sendFile('/projects/MEAN-SocialNetwork/posts.html');
});

app.get('/api/posts', function(req, res){
   Post.find(function(err, posts){
       if(err){ return next(err); }
       res.json(posts);
   });
});

app.post('/api/posts', function(req, res, next){
    console.log('Post Recieved');
    console.log(req.body.username);
    console.log(req.body.body);
    
    var post = new Post({
        username: req.body.username,
        body: req.body.body
    });
    post.save(function(err, post){
        if(err){ return next(err); }
        res.json(201, post);
    });
});

app.listen(3000, function() {
    console.log('Server listening on', 3000);
});