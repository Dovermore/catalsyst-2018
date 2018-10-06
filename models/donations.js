var mongoose = require('mongoose');

var DonationSchema = new mongoose.Schema(
    {
        "donorID": String,
        "type": String,
        "date": String,
        "location": String,
        "teamID": String
    }
);
mongoose.model('donations', DonationSchema);