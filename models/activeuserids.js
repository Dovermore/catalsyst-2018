var mongoose = require('mongoose');

var ActiveUserIDSchema = new mongoose.Schema(
    {
        "donorID": String,
    }
);
mongoose.model('activeuserids', ActiveUserIDSchema);