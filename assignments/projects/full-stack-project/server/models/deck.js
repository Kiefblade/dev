const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deckSchema = new Schema({
  name: String,
  decks: [Object]
})

module.exports = mongoose.model("userDecks", deckSchema);
