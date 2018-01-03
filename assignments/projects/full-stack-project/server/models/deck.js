const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const deckSchema = new Schema({
    name: String,
    deck: [{
      artist: String,
      cmc: Number,
      colorIdentity:[String],
      colors:[String],
      flavor: String,
      id:String,
      imageUrl:String,
      layout:String,
      manaCost:String,
      multiverseid: Number,
      name:String,
      number:String,
      originalText:String,
      originalType:String,
      power:String,
      printings:[String],
      rarity:String,
      set:String,
      setName:String,
      subtypes: [String],
      text: String,
      toughness:String,
      typeOfDeck:String,
      types: [String]
    }]
})

module.exports = mongoose.model("userDecks", deckSchema);
