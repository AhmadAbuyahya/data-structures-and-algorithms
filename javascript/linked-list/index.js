'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);

    if(this.head){
      node.next=this.head;
      this.head=node;
    }else{
      this.head=node;
    }
    return this ;
  }
  includes(value) {

    let currentNode = this.head;
    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    return false;

  }
  toString() {
    let currentNode = this.head;
    let str = '';
    while (currentNode) {
      str = `${str} {${currentNode.value}} -> `;
      currentNode = currentNode.next;
    }
    return str+'null';
  }

  append(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    return this;
  }
  insertAfter(value, newVal){
    let currentNode=this.head;
    while(currentNode.value){
      if(currentNode.value===value){
        let node = new Node(newVal);
        node.next=currentNode.next;
        currentNode.next=node;
        return;
      }
      currentNode=currentNode.next;
    }
  }
  insertBefore(value,newVal){
    let currentNode=this.head;
    let nextNode=currentNode.next;
    while(nextNode){
      if(nextNode.value===value){
        let node= new Node(newVal);
        currentNode.next=node;
        node.next=nextNode;
        return;
      }
      currentNode = currentNode.next;
      nextNode = nextNode.next;
    }
  }
  kthFromEnd(k){
    let currentNode=this.head;
    let arr=[];
    if(k<0){
      return 'Exception';
    }
    while(currentNode){
      arr.push(currentNode.value);
      currentNode=currentNode.next;
    }
    if(k>=arr.length){
      return 'Exception';
    }else{
      return arr[arr.length-(k+1)];
    }
  }
}


module.exports = LinkedList;
