const mongoose = require('mongoose');
const Item = mongoose.model('Item');

module.exports = {

    get: (req, res) => {
        Item.find({_id: req.params.id}, (err, data) => {
            if (err) {
                res.json({ message: 'Error' });
            } else {
                res.json(data);
            }
        })
    }, 

    create: (req, res) => {
        var item = new Item({
            type: req.body.type, 
            image: req.body.image
        });
        item.save( (err) => {
            if(err) {
                console.log('somthing went wrong in create');
                for (var key in err.errrors) {
                    req.flash('creating', err.errors[key].message)
                };

                res.rederict('/');
            } else {
                console.log('successfully added item!');
                res.redirect('/');
            };
        });
    },

    update: (req, res) => {
        Item.update({ _id: req.params.id }, { $set: req.body }, (err, data) => {
            if (err) {
                res.json({ message: 'Error' });
            } else {
                res.json(data);
            }
        })
    },

    delete: (req, res) => {
        Item.deleteOne({ _id: req.params.id}, (err, data) => {
            if (err) {
                res.json({ message: 'Unable to delete OR object not FOUND!' });
            } else {
                res.json(data);
            }
        })
    }
    
}