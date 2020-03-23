const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {

    index: (req, res) => {
        User.find({}, (err, data) => {
            if (err) {
                res.json({ message: 'Error in Index!' });
            } else {
                res.json(data);
            }
        })
    },

    get: (req, res) => {
        User.find({_id: req.params.id}, (err, data) => {
            if (err) {
                res.json({ message: 'Error in Get!' });
            } else {
                res.json(data);
            }
        })
    }, 

    create: (req, res) => {
        var user = new User({
            firstName: req.body.firstName, 
            lastName: req.body.lastName
        });
        user.save( (err) => {
            if(err) {
                console.log('somthing went wrong in create');
                for (var key in err.errrors) {
                    req.flash('creating', err.errors[key].message)
                };

                res.rederict('/');
            } else {
                console.log('successfully added user!');
                res.redirect('/');
            };
        });
    },

    update: (req, res) => {
        User.update({ _id: req.params.id }, { $set: req.body }, (err, data) => {
            if (err) {
                res.json({ message: 'Error in update!' });
            } else {
                res.json(data);
            }
        })
    },

    delete: (req, res) => {
        User.deleteOne({ _id: req.params.id}, (err, data) => {
            if (err) {
                res.json({ message: 'Unable to delete OR object not FOUND!' });
            } else {
                res.json(data);
            }
        })
    }
}
