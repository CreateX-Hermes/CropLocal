const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    favoriteStands: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stand'
    }],
    profilePicture: {
        type: String
    }
})

module.exports = (mongoose.models.User ||  mongoose.model('User', userSchema))