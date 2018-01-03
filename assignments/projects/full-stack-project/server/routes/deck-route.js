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
  .post((req, res) => {
    console.log(req.body, "body")
    req.body.typeOfDeck = req.body.type;
    const newDeck = new Deck(req.body);
    newDeck.save((err) => {
      if (err) return res.status(500).send(err);
      res.send(newDeck);
    })
  })
  .delete((req, res) => {
    Deck.collection.remove();
    res.send("IT'S FUCKING GONE")
  })

deckRoutes.route("/:id")
  .delete((req, res) => {
    Deck.findByIdAndRemove(req.params.id, (err, deck) => {
      if(err) return res.status(500).send(err);
      res.send(deck);
    })
  })

  module.exports = deckRoutes;
