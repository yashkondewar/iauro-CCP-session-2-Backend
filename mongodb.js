const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "yashkart";
const client = new MongoClient(url);

async function dbConnect() {
  let result = await client.connect();
  let db = result.db(database);
  // let collection = db.collection("items");
  return db.collection("items");

  // let response = await collection.find({name: 'Realme 30s'}).toArray();
  // console.log(response);
}
module.exports = dbConnect;