// Import Items model to count and fetch items from MongoDB
const Items = require('../models/ItemsModel')

// Import Users model to count total users from MongoDB
const Users = require('../models/userModel')

// ----------------------
// GET Dashboard Count
// Returns total items and total users count for the logged-in user
// This function returns total items, total users, and total stock value
// ----------------------
const getDashboardCount = async (req, res) => {
    try {
        // Count total items that belong to the logged-in user
        const totalItems = await Items.countDocuments({ userId: req.userId })
        // Aggregation pipeline runs entirely in MongoDB — no need to fetch all items into memory
        // $match filters items belonging to the logged-in user
        // $group with _id: null groups ALL matched items into one result
        // $sum: 1 counts total items, $sum of (sellingPrice * quantity) gives total stock value
        const [itemStats] = await Items.aggregate([
            { $match: { userId: req.userId } },
            {
                $group: {
                    _id: null,
                    totalItems: { $sum: 1 },
                    totalStockValue: { $sum: { $multiply: ["$sellingPrice", "$quantity"] } }
                }
            }
        ])

        // Count total users in the system
        const totalUsers = await Users.countDocuments()

        // Calculate total stock value (sellingPrice * quantity) for user's items
        const allItems = await Items.find({ userId: req.userId })

        // Add up total stock value
        let totalStockValue = 0
        allItems.forEach((item) => {
            totalStockValue += item.sellingPrice * item.quantity
        })

        res.status(200).json({
            message: "Dashboard Data",
            data: {
                totalItems,       // how many items user has
                totalUsers,       // total registered users
                totalStockValue   // total value of all items
               
                
            }
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error fetching dashboard data", error: error.message })
    }
}

// Export getDashboardCount so we can use it in server.js
module.exports = { getDashboardCount }