const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/deck-collection',
      {useMongoClient: true},
      err => {
        if (err) throw err;
        console.log('Connected to the database!')
      }
)

app.use("/decks", require('./routes/deck-route.js'));
