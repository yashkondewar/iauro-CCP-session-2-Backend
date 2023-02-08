// const { MongoClient } = require("mongodb");
// const url = "mongodb://localhost:27017";
// const database = "yashkart";
// const client = new MongoClient(url);

// async function dbConnect() {
//   let result = await client.connect();
//   let db = result.db(database);
//   // let collection = db.collection("items");
//   return db.collection("items");

//   // let response = await collection.find({name: 'Realme 30s'}).toArray();
//   // console.log(response);
// }

// dbConnect().then((resp)=>{
//   resp.find({name: 'Realme 30s'}).toArray().then((data)=>{
//     console.warn(data)
//   })
// })
// console.warn(dbConnect());

// const dbConnect = require('./mongodb')

// const main = async () =>{
//   let data = await dbConnect();
//   // console.log("main function called")
//   data = await data.find().toArray;
//   console.warn(data);
// }
// main();

// const { Double } = require("mongodb");
// const mongoose = require("mongoose");
// const saveInDB = async () => {
//   await mongoose.connect("mongodb://localhost:27017/yashkart");
//   const ProductSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//     rating: Number,
//     qty: Number,
//     sold: Number,
//   });
//   const ProductsModel = mongoose.model("items", ProductSchema);
//   let data = new ProductsModel({
//     name: "m8",
//     price: 1000,
//     rating: "Maxx",
//     qty: 34,
//     sold: 400,
//   });
//   let result = await data.save();
//   console.log(result);
// };
// const updateInDB = async () => {
//   const Product = mongoose.model("items", ProductSchema);
//   let data = await Product.updateOne(
//     { name: "max pro 5" },
//     {
//       $set: { price: 700, name:'max 8' },
//     }
//   );
//   console.log(data);
// };
// const deleteInDB = async() =>{
//     const Product = mongoose.model("items", ProductSchema);
//     let data = await Product.deleteOne({name:'max 8'});
//     console.log(data);
// }
// deleteInDB();
require("./config");
const express = require("express");
const app = express();
const url = "mongodb://localhost:27017/yashkart";
const mongoose = require("mongoose");
mongoose.connect(url, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database!"));
const Product = require("./item");

app.use(express.json());


app.post("/create", (req, resp) => {
  resp.send("Done");
});
app.listen(3000);