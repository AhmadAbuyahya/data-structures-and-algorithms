
const LinkedList = require('../linked-list/index');

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    const sum = key.split('').reduce((acc, v) => acc + v.charCodeAt(0), 0);
    return (sum * 19) % this.size;
  }

  set(key, value) {
    const hashed = this.hash(key);
    if (!this.table[hashed]) {
      this.table[hashed] = new LinkedList();
    }
    this.table[hashed].append({ [key]: value });
  }


  get(key){
    const hashed = this.hash(key);
    const bucket = this.table[hashed];
    if(bucket){
      let current = bucket.head;
      while(current){
        if(current.value[key]){
          return current.value;
        }
        current=current.next;
      }
    }
    return null;
  }

  contains(key){
    const hashed = this.hash(key);
    const bucket = this.table[hashed];
    if(bucket){
      let current = bucket.head;
      while(current){
        if(current.value[key]){
          return true;
        }
        current=current.next;
      }
    }
    return false;
  }
}

module.exports=HashTable;
