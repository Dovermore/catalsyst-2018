var mongoose = require('mongoose');

var MemberSchema = new mongoose.Schema(
    {
        "donorID": String,
        "donorNum": String,
        "password": String,
        "firstname": String,
        "lastname": String,
        "dateofbirth": String,
        "address": String,
        "suburb": String,
        "postcode": String,
        "state": String,
        "phone": String,
        "email": String,
        "bloodtype": String,
        "haemoglobin": String,
        "height": String,
        "weight": String
    }
);



mongoose.model('members', MemberSchema);