let newArr = [];

function twoSum(arr, int){
  for (let i = 0; i < arr.length; i++){
    for (let j = i; j < arr.length; j++){
      if (arr[i] + arr[j + 1] === int){
        newArr.push(i, j + 1);
      }
    }
  }
  return newArr;
}
console.log(twoSum([1,2,3], 4));
