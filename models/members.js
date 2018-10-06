var mongoose = require('mongoose');

var MemberSchema = new mongoose.Schema(
    {
        "memberID": String,
        "password": String,
        "firstname": String,
        "lastname": String,
        "dateofbirth": String,
        "state": String,
        "schoolyear": String,
        "email": String,
    }
);

mongoose.model('members', MemberSchema);