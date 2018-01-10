const express = require("express");
const shopRoute = express.Router();
const Player = require("../../models/Player.js");

shopRoute.put("/", (req, res) => {
  console.dir(req.body, "request");
  Player.findByIdAndUpdate(req.user._id, {$push: {inventory: req.body}}, {new: true}, (err, item) => {
    console.log(item, "item");
    if (err) return res.status(500).send(err);
    res.send(item);
  });
});

module.exports = shopRoute;
