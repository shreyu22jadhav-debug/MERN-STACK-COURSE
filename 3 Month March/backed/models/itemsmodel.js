const mongoose = require('mongoose')

//Schema - model (database structure)

//define structure of item document in mongoDB
const itemsSchema = new mongoose.Schema({

    //Item name
    name: String,

    //Item decription
    decription: String,

    //Item sellingPrice
    sellingPrice: Number,

    //Item purchasePrice
    purchasePrice: Number,

    //Item quantity
    quantity: Number,

    //Item unit
    unit: String,
})

//create collection /table called "Item"

module.exports = mongoose.model("Items", itemsSchema)