const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  rating: Number,
  qty: Number,
  sold: Number,
});
module.exports = mongoose.model('items',productSchema);