var greatestProductOfPairs = require('../warmup.js');

describe('greatestProductOfPairs', function(){
  it('Finds the largest product of any pair of integers in the array', function(){
    expect(greatestProductOfPairs([2,3,4,-5,92,100])).toEqual(9200);
    expect(greatestProductOfPairs([-2,3,-4,-5,-92,-100])).toEqual(9200);
    expect(greatestProductOfPairs([-1,2,-3,4,-5,6])).toEqual(-2);
  });
});
