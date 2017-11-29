// function every(arr, callBack) {
// for (let i = 0; i < arr.length; i++){
//     if (!callBack(arr[i])){
//         return false
//     };
// }
// return true;
// }
//
// function checkTrue (theSingleNumber) {
// return typeof theSingleNumber === "number"
// }
//
// console.log(every([1,2,"3"], checkTrue))

//EVERY ^^^^^

//SOME
function some(arr, callBack) {
for (let i = 0; i < arr.length; i++){
    if (callBack(arr[i])){
        return true;
    };
}
return false;
}

function checkTrue (theSingleNumber) {
return typeof theSingleNumber === "number"
}

console.log(some(["1","2",3], checkTrue))
