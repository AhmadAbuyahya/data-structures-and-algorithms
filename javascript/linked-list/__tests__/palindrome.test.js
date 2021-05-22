const LinkedList = require('../index.js');
const palindrome = require('../palindrome');
describe('Linked List', () => {
  it('gives true if list is a palindrome', () => {
    let list1 =new LinkedList;
    list1.insert('t');
    list1.append('o');
    list1.append('o');
    list1.append('t');
    expect(palindrome(list1)).toEqual(true);
  });
  it('gives false if list is not a palindrome', () => {
    let list1 =new LinkedList;
    list1.insert(1);
    list1.append(2);
    list1.append(2);
    list1.append(2);
    list1.append(3);
    list1.append(2);
    list1.append(2);
    list1.append(2);
    list1.append(1);
    expect(palindrome(list1)).toEqual(true);
  });
});
