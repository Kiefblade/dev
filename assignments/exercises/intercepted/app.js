const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

const inject = require('./middleware/inject');

app.use(bodyParser.json());

app.use("/", inject);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
})

app.get("/", (req, res) => {
  console.log(req.inject);
  res.send("POSTED");
})
