const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Name: String,
}, { timestamps: true })

mongoose.model('User', UserSchema);

const PollSchema = new mongoose.Schema({
    Question: String,
    OptionOne: String,
    OptionTwo: String,
    OptionThree: String,
    OptionFour: String
}, { timestamps: true })

mongoose.model('Poll', PollSchema);