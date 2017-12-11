const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const uuid = require('uuid/v4');

app.use(bodyParser.json());

const bounties = [];

app.get('/bounties', (req, res) => {
  return res.send(bounties);
})

app.post('/bounties', (req, res) => {
  bounties.push(req.body);
  return res.send({
    message: "Kill me",
    bounty: req.body
})
})

app.delete()

app.listen(port, ()=> {
  console.log(`App is listening on ${port}!`);
})
