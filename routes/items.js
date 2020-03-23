const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const items = require('../controllers/items.js');

module.exports = (app) => {

    app.get('/item/:id', (req, res) => {
        items.get(req, res);
    })

    app.post('/item/create', (req, res) => {
        items.create(req, res);
    });

    app.put('/item/update/:id', (req, res) => {
        items.update(req, res);
    });

    app.delete('/item/delete/:id', (req, res) => {
        items.delete(req, res);
    });
}