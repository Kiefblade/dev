var goombahBounty = document.getElementById('goombahNum');
var cheepBounty = document.getElementById('cheepNum');
var bobBounty = document.getElementById('bobNum');

// totalButton.addEventListener("click", function killCount(){
//   (goombahBounty * 5) + (cheepBounty * 11) + (bobBounty * 7);
//   document.getElementById('totalcoins').innerHTML = killCount;
// });

function killCount(){
  document.getElementById('totalcoins').innerHTML = (goombahBounty.value * 5) + (cheepBounty.value * 11) + (bobBounty.value * 7);
}

document.getElementById('totalButton').addEventListener("click", killCount);
