axios.get('https://api.vschool.io/lukeoliver/todo/').then(function(response){

    for (var i = 0; i < response.data.length; i++){
      var toDoTitle = response.data[i].title;
      document.getElementById('main').innerHTML += "<h1>" + toDoTitle + "</h1>";
      var toDoDescribe = response.data[i].description;
      document.getElementById('main').innerHTML += "<h2>" + toDoDescribe + "</h2>";
      var toDoPrice = response.data[i].price;
      document.getElementById('main').innerHTML += "<h2>" + toDoPrice + "</h2>";

    }
});
document.getElementById('postNewToDos').addEventListener("click", function(){
  var newOutput = {
    title: document.getElementById('newToDoTitle').value,
    description: document.getElementById('newToDoDescrip').value,
    price: document.getElementById('newToDoPrice').value
  }
  axios.post('https://api.vschool.io/lukeoliver/todo/', newOutput)
    document.getElementById('main').innerHTML += "<h1>" + newOutput.title + "</h1>";
    document.getElementById('main').innerHTML += "<h1>" + newOutput.description + "</h1>";
    document.getElementById('main').innerHTML += "<h1>" + newOutput.price + "</h1>";
})
