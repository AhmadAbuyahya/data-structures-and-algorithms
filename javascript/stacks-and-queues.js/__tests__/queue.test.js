'use strict';

const Queue = require('../queue');

describe('Queue', ()=> {
  it('Can successfully enqueue into a queue', ()=> {
    let q = new Queue();
    q.enqueue(1);
    expect(q.peek()).toEqual(1);
  });
  it('Can successfully enqueue multiple values into a queue', ()=> {
    let q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    expect(q.peek()).toEqual(1);
    expect(q.storage[0]).toEqual(1);
    expect(q.storage[1]).toEqual(2);
    expect(q.storage[2]).toEqual(3);
  });
  it('Can successfully dequeue out of a queue the expected value', ()=> {
    let q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    expect(q.dequeue()).toEqual(1);
    expect(q.peek()).toEqual(2);
  });
  it('Can successfully peek into a queue, seeing the expected value', ()=> {
    let q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    expect(q.peek()).toEqual(1);
  });
  it('Can successfully empty a queue after multiple dequeues', ()=> {
    let q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.dequeue();
    q.dequeue();
    q.dequeue();
    expect(q.isEmpty()).toEqual(true);
  });
  it('Can successfully instantiate an empty queue', ()=> {
    let q = new Queue();
    expect(q.isEmpty()).toEqual(true);
  });
  it('Calling dequeue or peek on empty queue raises exception', ()=> {
    let q = new Queue();
    expect(q.peek()).toEqual('Exception');
    expect(q.dequeue()).toEqual('Exception');
  });
});
