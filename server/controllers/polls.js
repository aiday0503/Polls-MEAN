const mongoose = require('mongoose');
var User = mongoose.model('User');
var Poll = mongoose.model('Poll')

module.exports = {
    index: function(req, res) {
        User.find({}, function(err, results) {
            if (err) {
                console.log(err);
                res.json({ message: 'Ups you have an error' })
            } else {
                res.json(results);
            }
        })
    },

    new: function(req, res) {
        console.log(req.body);
        User.create(req.body, function(err, results) {
            if (err) {
                console.log(err)
                res.json({ message: 'Ups it seems like you have an error' });
            } else {
                res.json(results)
            }
        })
    },

    index: function(req, res) {
        Poll.find({}, function(err, results) {
            if (err) {
                console.log(err);
                res.json({ message: 'Ups you have an error' })
            } else {
                res.json(results);
            }
        })
    },

    new: function(req, res) {
        console.log(req.body);
        Poll.create(req.body, function(err, results) {
            if (err) {
                console.log(err)
                res.json({ message: 'Ups it seems like you have an error' });
            } else {
                res.json(results)
            }
        })
    }
}