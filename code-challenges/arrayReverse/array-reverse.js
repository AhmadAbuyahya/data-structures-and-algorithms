'use strict';
function reverseArray(arr){
  let newArr=[];
  for(let i=0;i<arr.length;i++){
    newArr.push(arr[arr.length-1-i]);
  }
  return newArr;
}
console.log(reverseArray([1,2,3,4]));
