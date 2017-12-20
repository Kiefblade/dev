const mongoose = require('mongoose');
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/todolist');

const toDoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  daysToComplete: Number,
  items: [String],
  completed: Boolean
})

const toDo = mongoose.model('ToDo', toDoSchema);

// const addToDo = new toDo({
//   title: "Another To-Do",
//   daysToComplete: 9,
//   items: ["Do Cool Stuff", "Do some more cool stuff."],
//   completed: true
// })
//
// addToDo.save((err, toDo) => {
//   console.log(toDo, "Added To-Do!");
// })
//
// // toDo.findOne({title: "Another To-Do"}, (err, toDo) => {
// //   console.log(toDo, "Here's your query result.")
// // })
//
// toDo.findOne({title: "Another To-Do"}, (err, toDo) => {
//   toDo.title = "Switch up"
//     toDo.save((err, toDo) => {
//       console.log(toDo, "Changed To-Do title!")
//     })
// })
//
// toDo.findOne({title: "Another To-Do"}, (err, toDo) => {
//   toDo.remove((err, toDo) => {
//     console.log(toDo, "Here's your removed results. It's nothing!")
//   })
// })
