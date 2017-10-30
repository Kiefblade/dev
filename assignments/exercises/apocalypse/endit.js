var num = Number(document.getElementById('timerfield').innerHTML);
var start = document.getElementById('start');

function timer() {
  var fuck = setInterval(function() {
    num--;
    if(num === 0) {
      clearInterval(fuck);
      document.getElementById('endnigh').innerText = "Hurry up and die pls. :)"
    }
    document.getElementById('timerfield').innerText = num;
  }, 1000);
}

start.addEventListener('click', timer);
