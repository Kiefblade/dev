var addNums = document.getElementById("addoutput")
var subNums = document.getElementById("suboutput")
var multNums = document.getElementById("multoutput")

document.getElementById("addbutt").addEventListener("click", function(){
  var addInput1 = Number(document.getElementById("addfirst").value);
  var addInput2 = Number(document.getElementById("addsecond").value);
  addNums.innerText = addInput1 + addInput2;
})
document.getElementById("subbutt").addEventListener("click", function(){
  var subInput1 = Number(document.getElementById("subfirst").value);
  var subInput2 = Number(document.getElementById("subsecond").value);
  subNums.innerText = subInput1 - subInput2;
})
document.getElementById("multbutt").addEventListener("click", function(){
  var multInput1 = Number(document.getElementById("multfirst").value);
  var multInput2 = Number(document.getElementById("multsecond").value);
  multNums.innerText = multInput1 * multInput2;
})
