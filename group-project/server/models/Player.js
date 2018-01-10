const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  currency: {
    type: Number,
    default: 0
  },
  inventory: {
    type: Array,
    default: [
      {
        "item": "Stimpak",
        "price": 50,
        imgUrl: "https://i.imgur.com/qMSCeKF.png",
        "description": "An item to regain HP."
      },
      {
        "item": "Health Pack",
        "price": 75,
        "imgUrl": "https://i.imgur.com/UN07H9D.png",
        "description": "Restores user to full HP."
      }
    ]
  },
  hp: {
    type: Number,
    default: 100,
  },
  damage: {
    type: Number,
    default: 10
  }
})

module.exports = mongoose.model("Player", playerSchema);
