import mongoose from "mongoose"

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
    }
})

module.exports = (mongoose.models.Stand ||  mongoose.model('Stand', standSchema))