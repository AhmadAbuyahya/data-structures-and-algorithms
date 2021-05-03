// 'use strict';
function insertShiftArray(arr,val){
  let newArr=[];
  for(let i=0;i<Math.ceil(arr.length/2);i++){
    newArr.push(arr[i]);
  }
  newArr.push(val);
  for(let i=Math.ceil(arr.length/2);i<arr.length;i++){
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(insertShiftArray([1,2,3,4,5],9));


describe('testing array', () => {
  test('should insert the second parameter at the middle of the array', () => {
    expect(insertShiftArray([1,2,3,4], 5)).toEqual([1,2,5,3,4]);
    expect(insertShiftArray([1,2,3,4,5], 6)).toEqual([1,2,3,6,4,5]);
  });
});
