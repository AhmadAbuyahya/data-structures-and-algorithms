'use strict';

// Require our linked list implementation
const LinkedList = require('../index.js');

describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
});

describe('linked List test',()=>{
  it('Can successfully instantiate an empty linked list',()=>{
    let testList= new LinkedList;
    expect(testList.head).toEqual(null);
  });
  it('Can properly insert into the linked list',()=>{
    let testList= new LinkedList;
    testList.insert(5);
    expect(testList.head.value).toEqual(5);
  });
  it('The head property will properly point to the first node in the linked list',()=>{
    let testList= new LinkedList;
    testList.insert(5);
    testList.insert(6);
    testList.insert(7);
    expect(testList.head.value).toEqual(7);
  });
  it('Can properly insert multiple nodes into the linked list',()=>{
    let testList= new LinkedList;
    testList.insert(5);
    testList.insert(6);
    testList.insert(7);
    expect(testList.head.value).toEqual(7);
    expect(testList.head.next.value).toEqual(6);
    expect(testList.head.next.next.value).toEqual(5);
  });
  it('Will return true when finding a value within the linked list that exists',()=>{
    let testList= new LinkedList;
    testList.insert(5);
    testList.insert(6);
    testList.insert(7);
    expect(testList.includes(6)).toEqual(true);
  });
  it('Will return false when searching for a value in the linked list that does not exist',()=>{
    let testList= new LinkedList;
    testList.insert(5);
    testList.insert(6);
    testList.insert(7);
    expect(testList.includes(8)).toEqual(false);
  });
  it('Can properly insert into the linked list',()=>{
    let testList= new LinkedList;
    testList.insert(5);
    expect(testList.head.value).toEqual(5);
  });
  it('Can properly return a collection of all the values that exist in the linked list',()=>{
    let testList= new LinkedList;
    testList.insert(5);
    testList.insert(6);
    testList.insert(7);
    expect(testList.toString()).toEqual(' {7} ->  {6} ->  {5} -> null');
  });
  it('Can successfully add a node to the end of the linked list',()=>{
    let testList= new LinkedList;
    testList.insert(5);
    testList.append(6);
    expect(testList.head.next.value).toEqual(6);
  });
  it('Can successfully add multiple nodes to the end of a linked list',()=>{
    let testList= new LinkedList;
    testList.insert(5);
    testList.append(6);
    testList.append(7);
    expect(testList.head.next.value).toEqual(6);
    expect(testList.head.next.next.value).toEqual(7);
  });
  it('Can successfully insert after a node in the middle of the linked list',()=>{
    let testList= new LinkedList;
    testList.insert(5);
    testList.append(6);
    testList.append(7);
    testList.insertAfter(6,11);
    expect(testList.head.next.next.value).toEqual(11);
  });
  it('Can successfully insert a node after the last node of the linked list',()=>{
    let testList= new LinkedList;
    testList.insert(5);
    testList.append(6);
    testList.append(7);
    testList.insertAfter(7,8);

    expect(testList.head.next.next.next.value).toEqual(8);
  });
  it('Can successfully insert a node before a node located in the middle of a linked list',()=>{
    let testList= new LinkedList;
    testList.insert(5);
    testList.append(6);
    testList.append(8);
    testList.append(9);
    testList.insertBefore(8,7);
    expect(testList.head.next.next.value).toEqual(7);
  });
  it('Can successfully insert a node before the first node of a linked list',()=>{
    let testList= new LinkedList;
    testList.insert(4);
    testList.append(6);
    testList.insertBefore(6,5);
    expect(testList.head.next.value).toEqual(5);
  });

});
