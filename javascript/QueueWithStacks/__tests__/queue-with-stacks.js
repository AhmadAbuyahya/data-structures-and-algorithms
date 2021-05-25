'use strict';

const Stack = require('../../stacks-and-queues.js/stack');

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
    return this;
  }

  dequeue() {
    while (this.stack1.top) {
      this.stack2.push(this.stack1.top);
      this.stack1.pop();
    }
    let returnValue=this.stack2.pop();
    while (this.stack2.top){
      this.stack1.push(this.stack2.top);
      this.stack2.pop();
    }
    return returnValue;
  }
}

module.exports = PseudoQueue;
