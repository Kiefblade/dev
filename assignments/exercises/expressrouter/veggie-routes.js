const express = require('express');
const veggieRouter = express.Router();

const veggieData = [];

veggieRouter.route('/')
  .get((req, res) => {
    res.send(veggieData);
  })
  .post((req, res) => {
    veggieData.push(req.body);
    return res.send(veggieData);
  })
veggieRouter.route('/:veggieId')
  .get((req, res) => {
    res.send(veggieData.veggieId);
  })


module.exports = veggieRouter;
