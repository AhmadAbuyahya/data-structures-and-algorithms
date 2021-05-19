const LinkedList = require('../index.js');
const zipList = require('../zipList');

describe('Linked List', () => {
  it('creates a zipped list from two lists', () => {
    let list1 =new LinkedList;
    let list2 =new LinkedList;
    list1.insert(1);
    list2.insert(2);
    list1.append(3);
    list2.append(4);
    list1.append(5);
    list2.append(6);
    list1.append(7);
    list2.append(8);
    const zippedList= zipList(list1,list2);
    expect(zippedList.toString()).toEqual(' {1} ->  {2} ->  {3} ->  {4} ->  {5} ->  {6} ->  {7} ->  {8} -> null');
  });
});
