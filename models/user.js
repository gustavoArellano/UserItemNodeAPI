const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    email: {type: String, require: true},
    returnDate: {type: Date, require: true},
    items: [ItemSchema]
}, {timestamps: true});

mongoose.model('User', UserSchema)