// Backed Project // Node js  // Express Js // DB - MongoDb  

// Print message in terminal when server file starts running
console.log("Hello Node js Project Strted")  

// Import Express framework (used to create server and APIs)
const express = require('express') 

// Create express application instance
const app = express() 

// Import mongoose library (used to connect Node.js with MongoDB database)
const mongoose = require('mongoose') 

// Import CORS library (allows frontend apps to call backend APIs)
const cors = require('cors') 

// Middleware: convert incoming request data into JSON format
app.use(express.json()) 

// Middleware: enable Cross-Origin Resource Sharing
app.use(cors()) 


// ----------------------
// MongoDB Database Connection
// ----------------------

// Connect Node.js server with MongoDB database
mongoose.connect("mongodb://127.0.0.1:27017/item-database")

// If connection successful show message in console
.then(() => console.log("Mongo DB Connected"))

// If error occurs print error
.catch((error) => console.log(error)) 



// ----------------------
// Schema - Model (Database Structure)
// ----------------------

// Define structure of item document in MongoDB
const itemsSchema = new mongoose.Schema({

    // Item name
    name: String,

    // Item description
    decription: String,

    // Selling price of item
    sellingPrice: Number,

    // Purchase price of item
    purchasePrice: Number,

    // Available quantity
    quantity: Number,

    // Unit type (kg, pcs, box etc)
    unit: String
})


// Create collection/table called "Items"
const Items = new mongoose.model("Items", itemsSchema)



// ----------------------
// API 1 - Create Item
// ----------------------

// POST API to create new item
app.post("/api/create-item", async (req, res) => {

    try {

        // Get item data sent from frontend
        const { name, decription, sellingPrice, purchasePrice, quantity, unit } = req.body

        // Create new item object using model
        const saveItem = new Items({
            name,
            decription,
            sellingPrice,
            purchasePrice,
            quantity,
            unit
        })

        // Save item into MongoDB
        await saveItem.save()

        // Send response to frontend
        res.status(201).json({
            message: "Item Created",
            data: saveItem
        })

    } catch (error) {

        // Print error in console
        console.log(error)

    }

})



// ----------------------
// API 2 - Update/Edit Item
// ----------------------

// PUT API used to update existing item
app.put("/api/update-item", (req, res) => {

    try {

        // Here we will receive item ID and updated data from frontend
        // Then we will update record in database using mongoose update query

    } catch (error) {

        console.log(error)

    }

})



// ----------------------
// API 3 - Delete Item
// ----------------------

// DELETE API to remove item from database
app.delete("/api/delete-item/:id", async (req, res) => {

    try {

        // Get item ID from URL parameters
        const { id } = req.params

        // Find item by ID and delete it
        const deleteItem = await Items.findByIdAndDelete(id)

        // Send success response
        res.status(200).json({
            message: "Item Deleted",
            deleteItem: deleteItem
        })

    } catch (error) {

        console.log(error)

    }

})



// ----------------------
// API 4 - Get All Items
// ----------------------

// GET API to fetch all items from database
app.get("/api/get-all-item", async (req, res) => {

    try {

        // Fetch all documents from Items collection
        const items = await Items.find()

        // Send data to frontend
        res.status(200).json({
            message: "Get All Item List",
            data: items
        })

    } catch (error) {

        console.log(error)

    }

})



// ----------------------
// Health Check API
// ----------------------

// Simple API to check server is running or not
app.get("/helth", (req, res) => {

    res.status(200).json({
        message: "Server is Runing"
    })

})



// ----------------------
// Server Start
// ----------------------

// Define port number where server will run
const PORT = 9090

// Start express server
app.listen(PORT, () => {

    // Show message when server starts
    console.log('Server Started')

})
