
'use strict';

class Stack {
  constructor() {
    this.top = null;
    this.storage = [];
  }
  peek() {
    if(this.storage.length===0){
      return 'Exception';
    }else{
      return this.top;
    }
  }

  push(item) {
    this.storage.unshift(item);
    this.top = item;
  }

  pop() {
    if (this.storage.length===0){
      return 'Exception';
    }else{
      let item = this.storage.shift();
      this.top = this.storage[0] || null;
      return item;
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

module.exports = Stack;
