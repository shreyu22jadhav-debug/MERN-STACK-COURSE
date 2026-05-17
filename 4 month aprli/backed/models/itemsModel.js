const mongoose = require("mongoose")

const itemsSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },

    name: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    sellingPrice: {
        type: Number,
        required: true
    },

    purchasePrice: {
        type: Number,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    unit: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})

// Important line
const items = mongoose.models.items || mongoose.model("items", itemsSchema)

module.exports = items