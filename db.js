/*eslint-env node */
var mongoose = require('mongoose');

mongoose.connect('mongodb://10.16.24.12:/social', function(){
    console.log('mongodb connected');
});

module.exports = mongoose;