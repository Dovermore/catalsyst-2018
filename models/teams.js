var mongoose = require('mongoose');

var TeamSchema = new mongoose.Schema(
    {
        "link": String,
        "email": String,
        "teamID": String,
        "teamname": String,
        "members": { type: Array, default: void 0 }
    }
);

mongoose.model('teams', TeamSchema);