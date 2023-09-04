import mongoose from "mongoose"

const itemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true
    }

})

module.exports = (mongoose.models.Item ||  mongoose.model('Item', itemSchema))