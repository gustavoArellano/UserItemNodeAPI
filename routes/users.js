const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const users = require('../controllers/users.js');

module.exports = (app) => {

    app.get('/', (req, res) => {
        users.index(req, res);
    });

    app.get('/user/:id', (req, res) => {
        users.get(req, res);
    })

    app.post('/user/create', (req, res) => {
        users.create(req, res);
    });

    app.put('/user/update/:id', (req, res) => {
        users.update(req, res);
    });

    app.delete('/user/delete/:id', (req, res) => {
        users.delete(req, res);
    });
}
