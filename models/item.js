const mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
    type: {type: String, require: true},
    image: []
}, {timestamps: true});

mongoose.model('Item', ItemSchema)