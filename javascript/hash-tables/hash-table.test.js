'use strict';

const HashTable = require('./hash-tables');

describe('Hash-table', () => {
  const hashTable = new HashTable(20);
  it('Adding a key/value to your hash-table results in the value being in the data structure', () => {
    hashTable.set('java', 'script');
    hashTable.set('asd',654);
    expect(hashTable.get('java')).toEqual({"java": "script"});
    expect(hashTable.get('asd')).toEqual({"asd": 654});
  });
  it('should Successfully returns null for a key that does not exist in the hashtable', () => {
    expect(hashTable.get('asdasda')).toEqual(null);
  });
  it('should Successfully handle a collision within the hashtable', () => {
    hashTable.set('lemon','1');
    hashTable.set('melon','2');
   
    expect(hashTable.get('melon')).toEqual({"melon": "2"});
    expect(hashTable.get('lemon')).toEqual({"lemon": "1"});
  });
  it('should Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
    expect(hashTable.get('melon')).toEqual({'melon':'2'});
    expect(hashTable.get('lemon')).toEqual({'lemon':'1'});
  });
});
