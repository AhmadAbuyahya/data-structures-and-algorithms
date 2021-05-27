const multiBracketValidation=require('../multi-bracket-validation');
const stack=require('../../stacks-and-queues.js/stack');
describe('multi-bracket-validation',()=>{
  it('works',()=>{
    expect(multiBracketValidation('{}')).toEqual(true);
    expect(multiBracketValidation('{}(){}')).toEqual(true);
    expect(multiBracketValidation('()[[Extra Characters]]')).toEqual(true);
    expect(multiBracketValidation('(){}[[]]')).toEqual(true);
    expect(multiBracketValidation('{}{Code}[Fellows](())')).toEqual(true);
    expect(multiBracketValidation('[({}]')).toEqual(false);
    expect(multiBracketValidation('(](	')).toEqual(false);
    expect(multiBracketValidation('{(})	')).toEqual(false);
  });
});
