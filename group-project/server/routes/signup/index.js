const express = require("express");
const signUpRoutes = express.Router();
const Players = require("../../models/Player");
const jwt = require("jsonwebtoken");

signUpRoutes.post("/signup", (req, res) => {
  Players.findOne({username: req.body.username}, (err, player) => {
    if (err) return res.status(500).send(err);
    if (player) return res.status(400).send({err: "That playername is taken, choose another."})
  });
  const newPlayer = new Players(req.body);
  newPlayer.save(err => {
    if (err) return res.status(500).send(err);
    return res.status(201).send(newPlayer)
  })
})

signUpRoutes.post("/login", (req, res) => {
  Players.findOne({username: req.body.username.toLowerCase()}, (err, player) => {
    if (err) return res.status(500).send(err);
    if (!player || player.password !== req.body.password) {
      return res.status(403).send({err: "Username or password are incorrect"});
    }
    const token = jwt.sign(player.toObject(),
    process.env.SECRET);
    return res.send({token: token, player: player})
  })
})

  module.exports = signUpRoutes;
