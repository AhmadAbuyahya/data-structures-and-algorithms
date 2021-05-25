'use strict';

const AnimalShelter = require('../fifo-animal-shelter');

describe('Animal Shelter',()=>{
  it('queues animals correctly',()=>{
    const as=new AnimalShelter();
    as.enqueue('dog');
    as.enqueue('dog');
    as.enqueue('cat');
    expect(as.dogs[0]).toEqual('dog');
    expect(as.dogs[1]).toEqual('dog');
    expect(as.cats[0]).toEqual('cat');
  });
  it('dequeues animals correctly according to preference',()=>{
    const as=new AnimalShelter();
    as.enqueue('dog');
    as.enqueue('dog');
    as.enqueue('cat');
    expect(as.dequeue('dog')).toEqual('dog');
    expect(as.dequeue('dog')).toEqual('dog');
    expect(as.dequeue('cat')).toEqual('cat');
    expect(as.dequeue('penguin')).toEqual(null);
  });
});
