const Stack=require('../stacks-and-queues.js/stack');

function multiBracketValidation (input) {

  let brackets = '[]{}()';
  let stack = new Stack();

  for(let bracket of input) {
    let bracketsIndex = brackets.indexOf(bracket);

    if (bracketsIndex === -1){
      continue;
    }

    if(bracketsIndex % 2 === 0) {
      stack.push(bracketsIndex + 1);
    } else {
      if(stack.pop() !== bracketsIndex) {
        return false;
      }
    }
  }
  return stack.storage.length === 0;
}

module.exports= multiBracketValidation;
