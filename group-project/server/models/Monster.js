const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const monsterSchema = new Schema({
  name: String,
  hp: Number,
  drops: Array,
  damage: Number
})

module.exports = mongoose.model("Monster", monsterSchema);
