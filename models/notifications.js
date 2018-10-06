var mongoose = require('mongoose');

var NotificationSchema = new mongoose.Schema(
    {
        "email": String,
        "title": String,
        "heading": String,
        "imgsource": String,
        "content": String,
        "date": String,
        "time": String
    }
);

mongoose.model('notifications', NotificationSchema);