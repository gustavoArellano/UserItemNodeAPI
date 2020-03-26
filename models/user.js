const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const item = require('./item')

const ItemSchema = new mongoose.Schema({
    inStock: 0,
    itemName: {
        type: String,
        required: true
    }
}, {timestamps: true});

mongoose.model('Item', ItemSchema)

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String, 
        require: true
    },
    lastName: {
        type: String, 
        require: true
    },
    email: {
        type: String, 
        require: true
    },
    returnDate: {
        type: Date, 
        require: true
    },
    items: [ItemSchema]
}, {timestamps: true});

mongoose.model('User', UserSchema)
