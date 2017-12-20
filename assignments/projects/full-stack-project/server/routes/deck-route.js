const express = require('express');
const deckRoutes = express.Router();
const Deck = require('../models/deck.js')

deckRoutes.route('/')
  .get((req, res) => {
    Deck.find((err, decks) => {
      if (err) return res.status(500).send(err);
      res.send(decks);
    })
  })

  module.exports = deckRoutes;
