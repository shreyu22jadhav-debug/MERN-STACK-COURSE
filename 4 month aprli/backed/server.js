

// ----------------------
// Backend Project
// Node.js + Express.js + MongoDB
// ----------------------

// express is a Node.js framework that helps us create a backend server easily
const express = require('express')

// app is our main server object - we use it to create routes and start server
const app = express()

// cors allows our frontend (running on different port) to talk to this backend
// Without cors, browser will block the request
const cors = require('cors')
require("dotenv").config()
// Import database connection function
// Import connectDB function from db.js to connect to MongoDB database
const connectDB = require('./config/db')


// Import all controller functions
// Import item controller functions (add, edit, delete, getAll)
const { addItem, editItem, deleteItem, getAllItems } = require('./controllers/itemsControllers')

// Import auth controller functions (login, register)
const { login, register } = require('./controllers/authControllers')

// Import dashboard controller function
const { getDashboardCount } = require('./controllers/dashboardControllers')

// Import auth middleware (checks if user is logged in via token)
const authMiddleware = require('./authMiddleware/authMiddleware')

const Items = require("./models/itemsModel")
// ----------------------
// Middleware Setup
// ----------------------

// Parse incoming JSON request body

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Allow frontend to call backend
app.use(cors())


// ----------------------
// Connect Database
// ----------------------
connectDB()


// ----------------------
// Auth Routes
// ----------------------

// POST /api/login
app.post("/api/login", login)

// POST /api/register
app.post("/api/register", register)


// ----------------------
// Items Routes
// ----------------------

// CREATE - Add new item
app.post("/api/create-item", authMiddleware, addItem)

// READ - Get all items
app.get("/api/get-all-item", authMiddleware, getAllItems)

// UPDATE - Edit item
app.put("/api/update-item", authMiddleware, editItem)

// DELETE - Delete item
app.delete("/api/delete-item/:id", authMiddleware, deleteItem)


// ----------------------
// Dashboard Route
// ----------------------
app.get("/api/get-dashboard", authMiddleware, getDashboardCount)


// ----------------------
// Health Check Route
// ----------------------
app.get("/api/health", (req, res) => {
    res.status(200).json({
        message: "Server is Running"
    })
})


// ----------------------
// Start Server
// ----------------------

// Read PORT from .env file
const PORT = process.env.PORT || 9090

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})