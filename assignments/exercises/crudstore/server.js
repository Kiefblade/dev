const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/crud-store",
    {useMongoClient: true},
    (err) => {
        if (err) throw err;
        console.log("Connected to the database");
    }
);

app.use('/inventory', require('./routes/inventory-routes'));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
});
