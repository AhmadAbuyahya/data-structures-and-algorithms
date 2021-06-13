const insertionSort = require('../insertionSort');

describe('insertionSort',()=>{

  it('works',()=>{
    let arr = [8,4,23,42,16,15];
    insertionSort(arr);
    expect(arr).toEqual([4,8,15,16,23,42]);
  });
  it('works2',()=>{
    let arr = [20,18,12,8,5,-2];
    insertionSort(arr);
    expect(arr).toEqual([-2,5,8,12,18,20]);
  });
  it('works3',()=>{
    let arr = [5,12,7,5,5,7];
    insertionSort(arr);
    expect(arr).toEqual([5,5,5,7,7,12]);
  });
  it('works4',()=>{
    let arr = [2,3,5,7,13,11];
    insertionSort(arr);
    expect(arr).toEqual([2,3,5,7,11,13]);
  });
});
