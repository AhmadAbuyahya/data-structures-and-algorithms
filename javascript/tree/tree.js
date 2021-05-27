'use strict';
class Node{
  constructor(value, left= null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    let results = [];
    let traverse = (node) => {
      results.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }

  inOrder() {
    let results = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      results.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return results;
  }

  postOrder() {
    let results = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      results.push(node.value);
    };
    traverse(this.root);
    return results;
  }
}

class BinarySearchTree extends BinaryTree {
  add(value){
    let newNode=new Node(value);
    if(this.root===null){
      this.root=newNode;
    }else{
      this.insertNode(this.root,newNode);
    }
  }
  insertNode(node, newNode){
    if(newNode.value < node.value){
      if(node.left === null){
        node.left = newNode;
      }else{
        this.insertNode(node.left, newNode);
      }
    } else{
      if(node.right === null){
        node.right = newNode;
      }else{
        this.insertNode(node.right,newNode);
      }
    }
  }
  contains(value){
    let arr=this.preOrder();
    if(arr.includes(value)){
      return true;
    }else{
      return false;
    }
  }
}
module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree
};
