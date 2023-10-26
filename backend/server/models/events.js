const mongoose = require("mongoose")

const eventsSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true
    },
    featuredStands: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Review",
        default: []
    },
    eventPicture: {
        type: String
    },
    location: {
        coordinates:{
            type: [Number],
        },
        type: {
            type: String,
            enum: ["Point"], // Specify that it's a Point type
            required: true
            }
    },
    eventReviews: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Review",
        default: []
    },
    eventCity: {
        type: String,
        default: ""
    },
    eventDate: {
        type: Date
    }
})

module.exports = (mongoose.models.Events ||  mongoose.model('Events', eventsSchema))