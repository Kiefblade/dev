var boxy = document.getElementById('boxboys');

function mouseChange(){
  boxy.style.backgroundColor = "blue"
}
    boxy.addEventListener("mouseover", mouseChange);

function mouseDouble(){
  boxy.style.backgroundColor = "green"
}
    boxy.addEventListener("dblclick", mouseDouble);

function mouseHold(){
  boxy.style.backgroundColor = "red"
}
    boxy.addEventListener("mousedown", mouseHold);

function mouseYellow(){
  boxy.style.backgroundColor = "yellow"
}
    boxy.addEventListener("mouseup", mouseYellow);

function mouseScrollin(){
  boxy.style.backgroundColor = "orange"
}
    boxy.addEventListener("wheel", mouseScrollin);
