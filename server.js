/*eslint-env node */
var express = require('express');
var bodyParser = require('body-parser');
var Post = require('./models/post.js');

var app = express();
app.use(bodyParser.json());

//Attach the api/posts controller
app.use('/api/posts', require('./controllers/api/posts'));

app.get('/', function(req, res){
    res.sendFile('/projects/MEAN-SocialNetwork/layouts/posts.html');
});

app.listen(3000, function() {
    console.log('Server listening on', 3000);
});