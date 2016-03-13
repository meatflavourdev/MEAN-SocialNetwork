/*eslint-env node */
var mongoose = require('mongoose');

mongoose.connect('mongodb://social:63/ears/drawing/lord/SPELL/FACE/service/throw/planet/21!!!!!!!!!@10.16.24.12:/social', function(){
    console.log('mongodb connected');
});

module.exports = mongoose;