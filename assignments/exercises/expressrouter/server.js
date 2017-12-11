const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/veggies', require('./veggie-routes.js'));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})
