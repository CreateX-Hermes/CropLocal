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
    },
    location: {
        type: {
            latitude: String,
            longitude: String,
            city: String,
        },
        default: {
            latitude: "40.7128 N",
            longitude: "74.0060 W",
            city: "New York"
        }
    },
    reviews: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Review",
        default: []
    }
})

module.exports = (mongoose.models.User ||  mongoose.model('User', userSchema))