'use strict';

class Queue {
  constructor() {
    this.storage = [];
  }

  enqueue(item) {
    this.storage.push(item);
  }

  dequeue() {
    if(this.storage.length===0){
      return 'Exception';
    }else{
      return this.storage.shift();
    }
  }

  peek() {
    if(this.storage.length===0){
      return 'Exception';
    }else{
      return this.storage[0];
    }
  }

  isEmpty(){
    if(this.storage.length===0){
      return true;
    }else{
      return false;
    }
  }
}

module.exports = Queue;
