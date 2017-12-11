function inject (req, res, next){
  req.inject ={
    text: "I'm dying!"
  }
  next();
}

module.exports = inject;
