const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comment: {
        type: String,
        maxLength: 500,
    },
    rating: {
        type: Number,
        
    }

})

module.exports = (mongoose.models.Review ||  mongoose.model('Review', reviewSchema))