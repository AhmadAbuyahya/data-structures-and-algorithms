const Stack = require('../stacks-and-queues.js/stack');
const PseudoQueue = require('./__tests__/queue-with-stacks');

describe('PseudoQueue', () => {
  it('successfully enqueues values', () => {
    let pq = new PseudoQueue();
    pq.enqueue(1);
    expect(pq.stack1.top).toEqual(1);
  });
  it('successfully dequeues values', () => {
    let pq = new PseudoQueue();
    pq.enqueue(1);
    pq.enqueue(2);
    pq.enqueue(3);
    expect(pq.dequeue()).toEqual(1);
  });
})