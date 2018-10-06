// Create database
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin@ds263089.mlab.com:63089/donorspace_db1', function(err){
    if(!err){
        console.log('Connected to MongoDB');
    }
    else {
        console.log('Failed to connect to MongoDB');
    }
});

require('./members');
require('./teams');
require('./donations');
require('./notifications');
require('./activeuserids');
