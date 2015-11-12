var Indexor = require('../src.js');

describe('objPropsToSubArray', function () {
  it('Takes an array of objects and where the ID matches, acculmulates common properties into an array', function (){
    expect(Indexor.objPropsToSubArray([
      {kidId: 1, kidName: 'Ed', toyName: 'Teddy Bear'},
      {kidId: 1, kidName: 'Ed', toyName: 'Car'},
      {kidId: 2, kidName: 'Su', toyName: 'Teddy Bear'},
    ])).toEqual([
      {kidId: 1, kidName: 'Ed', toys: ['Teddy Bear', 'Car']},
      {kidId: 2, kidName: 'Su', toys: ['Teddy Bear']},
    ]);
  });
})
