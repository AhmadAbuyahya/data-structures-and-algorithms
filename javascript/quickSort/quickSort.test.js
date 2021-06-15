const quickSort = require('./quickSort');

describe('quick', () => {
  it('works', () => {
    let arr = [8, 4, 23, 42, 16, 15];
    let test = quickSort(arr);
    expect(test).toEqual([4, 8, 15, 16, 23, 42]);
  });
  it('works2', () => {
    let arr = [20, 18, 12, 8, 5, -2];
    let test = quickSort(arr);
    expect(test).toEqual([-2, 5, 8, 12, 18, 20]);
  });
  it('works3', () => {
    let arr = [5, 12, 7, 5, 5, 7];
    let test = quickSort(arr);
    expect(test).toEqual([5, 5, 5, 7, 7, 12]);
  });
});
