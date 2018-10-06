// Create database
var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:password123@ds123753.mlab.com:23753/catalyst2018', function(err){
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
