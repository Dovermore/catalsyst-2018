var mongoose = require('mongoose');
var Members = mongoose.model('members');
var Notifications = mongoose.model('notifications');
var Donations = mongoose.model('donations');
var ActiveUserIDs = mongoose.model('activeuserids');
var Teams = mongoose.model('teams');

//CREATE MEMBER
// Create New member
var createMember = function(req,res){

    var member = new Members({
        "donorID": 'Donate to find out',
        "password": req.params.pw,
        "firstname": req.params.first,
        "lastname": req.params.last,
        "dateofbirth": req.params.DOB,
        "address": req.params.address,
        "suburb": req.params.suburb,
        "postcode": req.params.postcode,
        "state": req.params.state,
        "phone": req.params.phone,
        "email": req.params.email,
        "bloodtype": 'Donate to find out',
        "haemoglobin": 'Donate to find out',
        "height": 'Donate to find out',
        "weight": 'Donate to find out'
    });
    member.save(function(err,newMember){
        if(!err){
            res.send(newMember);
        }else{
            res.sendStatus(400);
        }
    });

};


// Fetch all teams
var findAllTeams = function(req,res){
    Teams.find(function(err,teams){
        if(!err){
            res.send(teams);
        }else{
            res.sendStatus(404);
        }
    });
}

//USER ID
//Keep track of Session
var findActiveUserIDs = function(req,res){
    ActiveUserIDs.findOne({_id: '000000000000000000000001'}, function(err, activeuserid){
        if(!err){
            res.send(activeuserid);
        }else{
            res.sendStatus(404);
        }
    });
};

// UPDATE USER ID
// Updates the active user id at the begining of the session
var updateActiveUserID = function(req,res){

    var inputID = req.params.id;

    ActiveUserIDs.findOneAndUpdate({_id: '000000000000000000000001'}, {$set:{donorID: inputID}}, {new:true},function(err, doc){
        if(!err){
            res.send(doc);
        }else{
            res.sendStatus(404);
        }
    });
};


// FIND MEMBER
// Find specific member by ID(email)
var findProfile = function(req,res){
    var memberID = req.params.id;
    Members.find({email: memberID},function(err,member){
        var member1 = member[0];
        if(!err){
            console.log(member1);
            res.send(member1);

        }else{
            res.sendStatus(404);
        }
    });
};

//GET NOTIFICATIONS
//get all notifications
var findAllNotifs = function(req,res){
    Notifications.find(function(err,notifs){
        if(!err){
            res.send(notifs);
        }else{
            res.sendStatus(404);
        }
    });
}


//FIND ALL PREVIOUS DONATIONS
var findDonations = function(req,res){
    Donations.find(function(err,donations){
        if(!err){
            res.send(donations);
        }else{
            res.sendStatus(404);
        }
    });
};

module.exports.createMember = createMember;
// module.exports.findMember = findMember;
module.exports.findAllNotifs = findAllNotifs;
module.exports.findDonations = findDonations;
module.exports.findProfile = findProfile;
module.exports.findActiveUserIDs = findActiveUserIDs;
module.exports.updateActiveUserID = updateActiveUserID;
module.exports.findAllTeams = findAllTeams;
