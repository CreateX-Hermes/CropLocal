const mongoose = require("mongoose")

const standSchema = new mongoose.Schema({
    standName: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    }],
    pictures: {
        type: [String]
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
    }

})

module.exports = (mongoose.models.Stand ||  mongoose.model('Stand', standSchema))