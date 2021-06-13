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
  breadthFirst(){
    let q=[];
    let results=[];
    q.push(this.root);
    while(q.length>0){
      let front=q.shift();
      results.push(front.value);
      if(front.left){
        q.push(front.left);
      }
      if(front.right){
        q.push(front.right);
      }
    }
    return results;
  }
  findMax(){
    let results=[];
    let max=this.root.value;
    let traverse=(node)=>{
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      results.push(node.value);
    };
    traverse(this.root);
    for (let i = 0; i < results.length; i++) {
      if (results[i]>max){
        max=results[i];
      }
    }
    return max;
  }
}

class BinarySearchTree extends BinaryTree {
  add(value){
    let newNode=new Node(value);
    const insert =(node, newNode)=>{
      if(newNode.value < node.value){
        if(node.left === null){
          node.left = newNode;
        }else{
          insert(node.left, newNode);
        }
      } else{
        if(node.right === null){
          node.right = newNode;
        }else{
          insert(node.right,newNode);
        }
      }
    };
    if(this.root===null){
      this.root=newNode;
    }else{
      insert(this.root,newNode);
    }
  }
  contains(value){
    let arr=this.preOrder();
    for(let i=0;i<arr.length;i++){
      if(arr[i]===value){
        return true;
      }
    }
    return false;
  }
}
// class kArytree{
//   constructor()
// }
module.exports = {
  Node,
  BinaryTree,
  BinarySearchTree
};
