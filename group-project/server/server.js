const express = require("express");
const app = express();
require("dotenv").config();
const expressJwt = require("express-jwt");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const port = process.env.PORT || 6660;

app.use(bodyParser.json());
app.use("/main", require("./routes/signup"), expressJwt({secret: process.env.SECRET}));

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/rpg",
    err => {
      if (err) throw err;
      console.log("Connected to the database");
    }
)

app.listen(port, () => {
  console.log(`Your server is spun the fuck up on port ${port}`);
})
