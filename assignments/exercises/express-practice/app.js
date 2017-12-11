const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

app.use(bodyParser.json())

const animals = []

app.get("/animals", (req, res)=>{
    return res.send(animals);
});

app.post("/animals", (req, res)=>{
    animals.push(req.body)
    return res.send({message: "here is your new animal", object: req.body});
})

app.listen(port, ()=>{
    console.log(`App is listening on port ${port}!`)
})
