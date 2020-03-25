const mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
    inStock = 0,
    length = 50,
    chunckSize = 50,
    filename = String,
    contentType = String,
    aliases = [],
    metadata = null,
}, {timestamps: true});

mongoose.model('Item', ItemSchema)