'use strict';
class AnimalShelter {
  constructor() {
    this.cats = [];
    this.dogs = [];
  }
  enqueue(animal){
    if (animal==='cat'){
      this.cats.push(animal);
    }else if(animal==='dog'){
      this.dogs.push(animal);
    }else{
      return 'only cats or dogs pls';
    }
  }
  dequeue(pref){
    if(pref==='cat'){
      if(this.cats.length===0){
        return 'sorry, we have no cats';
      }
      return this.cats.shift();
    }else if(pref==='dog'){
      if(this.dogs.length===0){
        return 'sorry, we have no dogs';
      }
      return this.dogs.shift();
    }else{
      return null;
    }
  }
}
module.exports= AnimalShelter;
