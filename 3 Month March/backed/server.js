// backed project

//node.js
// express.js
//DB mongoDb

//APT List

// 1. APT create ltem-  get data values from front and ( Items details) and store into DB
//2. APT update Item - get Item detais from front and which Item we need to update 
//3 .APT Delete Itme - get itme details from front and an delete this record from database 
//4 .APT AL Recorde - get all records from front  DB and Show to UI front end 



//const getdata =() =>{
//}
//function  getadata(){  
//}
console.log("Hello node js project strted")

const express = require("express") //node.js fremwork
const app = express() //app- variable - strore express function 
const mongoose = require("mongoose") // library -connect mongodb database 
const { error } = require("node:console")
const cors= require("cors")// library- solve cors error

app.use(express.json()) //convert all data into json formt
app.use(cors())
//  DB connection


mongoose.connect("mongodb://127.0.0.1:27017/item-database").then(() => console.log("mongodb connected")).catch((error) => console.log(error))


//Schema- model-data base table structure
// values store database- structure

const itemsschema = new mongoose.Schema({
  name: String,
  description: String,
  sellingprice: Number,
  purchaseprice: Number,
  quantity: Number,
  unit: String,
});

const item = new mongoose.model("item", itemsschema) // table name /collection name-item == structure

// API 1-create item
app.post("/api/create-item", async (req, res) => {
  try {
    const { name, description, sellingprice ,purchaseprice, quantity, unit } = req.body
    const saveItem = new item({
      name,
      description,
      sellingprice,
      purchaseprice,
      quantity,
      unit
    }

    )
    await saveItem.save()
    res.status(201).json({ message: "Item created", data: saveItem })

  } catch (error) {
    console.log(error)
  }
})


// API 2-update/edit item
app.put("api/update-item", (req, res) => {
  try {

  } catch (error) {
    console.log
  }
})

// API 3-delete item 
app.delete("api/delete-item", (req, res) => {
  try {

  } catch (error) {
    console.log
  }
})
// API 4-GetAll item
app.get("/api/get-all-item", async (req, res) => {
  try {
    const items = await item.find()
    res.status(200).json({ message: "  Get AllItem list", data: items })
  } catch (error) {
    console.log
  }
})

// Helth API
app.use("/helth", (req, res) => {
  res.status(200).json({ message: "server is runing" })
})



//srever start
const PORT = 9090


app.listen(PORT, () => {
  console.log('server stared')
})