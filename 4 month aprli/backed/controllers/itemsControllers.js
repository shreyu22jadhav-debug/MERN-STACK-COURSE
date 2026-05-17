// Import Items model
const Items = require('./../models/itemsModel');


// ----------------------
// CREATE - Add new item
// ----------------------
const addItem = async (req, res) => {
    try {

        // Logged-in user id
        console.log(req.userId, "=====> userId");

        // Get data from frontend
        const {
            name,
            decription,
            sellingPrice,
            purchasePrice,
            quantity,
            unit
        } = req.body;

        // Create new item
        const saveItem = new Items({
            name,
            decription,
            sellingPrice,
            purchasePrice,
            quantity,
            unit,
            userId: req.userId
        });

        // Save into database
        await saveItem.save();

        // Success response
        res.status(201).json({
            message: "Item Created",
            data: saveItem
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Error creating item",
            error: error.message
        });
    }
};


// ----------------------
// READ - Get all items
// ----------------------
const getAllItems = async (req, res) => {
    try {

        // Get items of logged-in user
        const items = await Items.find({
            userId: req.userId
        });

        res.status(200).json({
            message: "Get All Item List",
            data: items
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Error fetching items",
            error: error.message
        });
    }
};


// ----------------------
// DELETE - Delete item
// ----------------------
const deleteItem = async (req, res) => {
    try {

        // Get item id from params
        const { id } = req.params;

        // Delete item
        const deletedItem = await Items.findByIdAndDelete(id);

        res.status(200).json({
            message: "Item Deleted",
            data: deletedItem
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Error deleting item",
            error: error.message
        });
    }
};


// ----------------------
// UPDATE - Edit item
// ----------------------
const editItem = async (req, res) => {
    try {

        // Get updated data
        const {
            id,
            name,
            decription,
            sellingPrice,
            purchasePrice,
            quantity,
            unit
        } = req.body;

        // Update item
        const updatedItem = await Items.findByIdAndUpdate(
            id,
            {
                name,
                decription,
                sellingPrice,
                purchasePrice,
                quantity,
                unit
            },
            { new: true }
        );

        res.status(200).json({
            message: "Item Updated",
            data: updatedItem
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Error updating item",
            error: error.message
        });
    }
};


// Export all functions
module.exports = {
    addItem,
    getAllItems,
    deleteItem,
    editItem
};