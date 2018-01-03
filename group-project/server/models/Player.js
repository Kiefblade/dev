const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  currency: Number,
  inventory: Array,
  hp: Number,
  damage: Number
})

module.exports = mongoose.model("Player", playerSchema);
