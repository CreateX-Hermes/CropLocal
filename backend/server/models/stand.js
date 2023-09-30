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
    items: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item',
        }],
        default: []
    },
    pictures: {
        type: [String],
        default: []
    },
    location: {
        coordinates:{
            type: [Number],
            maxItems: 2,
            minItems: 2
        },
        type: {
            type: String,
            enum: ["Point"], // Specify that it's a Point type
            required: true
        }
    },

})

module.exports = (mongoose.models.Stand ||  mongoose.model('Stand', standSchema))