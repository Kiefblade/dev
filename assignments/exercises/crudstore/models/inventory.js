const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const invSchema =  new Schema ({
  brand: String,
  name: String,
  price: Number
});

module.exports = mongoose.model("Inventory", invSchema);
