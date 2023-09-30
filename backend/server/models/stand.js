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
    ownerName:{
        type: String
    },
    items: {
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item',
        }],
        default: []
    },
    picture: {
        type: String,
        default: "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/market_stand.png"
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
    rating: {
        type: Number,
        min: -1,
        max: 5,
        default: -1
    },
    description: {
        type: String,
        default: "This is my Stand!"
    },
    city: {
        type: String,
        default: ""
    }

})

module.exports = (mongoose.models.Stand ||  mongoose.model('Stand', standSchema))