const express = require('express');
const inventoryRoutes = express.Router();
const Item = require('../models/inventory');

inventoryRoutes.route('/')
  .get((req, res) => {
    Item.find((err, invItems) => {
      if (err) return res.status(500).send(err);
      res.send(invItems);
    });
  })
  .post((req, res) => {
    const newItem = new Item(req.body);
    newItem.save((err) => {
      if (err) return res.status(500).send(err);
      res.send(newItem);
    })
  });

  inventoryRoutes.route('/:id')
    .get((req, res) => {
      Item.findById(req.params.id, (err, item) => {
        if (err) return res.status(500).send(err);
        res.send(item);
      })
    })
    .put((req, res) => {
      Item.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, item) => {
        if (err) return res.status(500).send(err);
          res.send(item);
      })
    })
    .delete((req, res) => {
      Item.findByIdAndRemove(req.params.id, (err, item) => {
        if (err) return res.status(500).send(err);
        res.send({message: "Item Removed!", item});
      })
    })


module.exports = inventoryRoutes;
