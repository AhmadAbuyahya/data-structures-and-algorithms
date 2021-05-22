'use strict';
const Stack=require('../stack');
describe('Stack',()=>{
  it('Can successfully push onto a stack',()=>{
    let s=new Stack();
    s.push(1);
    expect(s.storage[0]).toEqual(1);
  });
  it('Can successfully push multiple values onto a stack',()=>{
    let s=new Stack();
    s.push(1);
    s.push(2);
    s.push(3);
    expect(s.storage[0]).toEqual(3);
    expect(s.storage[1]).toEqual(2);
    expect(s.storage[2]).toEqual(1);
  });
  it('Can successfully pop off the stack',()=>{
    let s=new Stack();
    s.push(1);
    s.push(2);
    s.pop();
    expect(s.storage[0]).toEqual(1);
  });
  it('Can successfully empty a stack after multiple pops',()=>{
    let s=new Stack();
    s.push(1);
    s.push(2);
    s.push(3);
    s.pop();
    s.pop();
    s.pop();
    expect(s.storage.length).toEqual(0);
  });
  it('Can successfully peek the next item on the stack',()=>{
    let s=new Stack();
    s.push(1);
    s.push(2);
    expect(s.peek()).toEqual(2);
  });
  it('Can successfully instantiate an empty stack',()=>{
    let s=new Stack();
    expect(s.storage.length).toEqual(0);
  });
  it('Calling pop or peek on empty stack raises exception',()=>{
    let s=new Stack();
    expect(s.pop()).toEqual('Exception');
    expect(s.peek()).toEqual('Exception');
  });
});
