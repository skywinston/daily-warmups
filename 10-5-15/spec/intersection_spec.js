var intersection = require('../warmup.js');

describe('intersection', function(){
  it('Returns an array containing the common elements from two input arrays', function(){
    var test1 = [1,2,3,4,5];
    var test2 = [3,4,7,8,9];
    var test3 = [];

    expect(intersection(test1, test2)).toEqual([3,4]);
    expect(intersection(test1, test3)).toEqual([]);
    expect(intersection(test2, test3)).toEqual([]);
  });

  it('Returns a copy of the arrays if they are identical', function(){
    var test1 = [1,2,3,4,5];
    var test2 = [1,2,3,4,5];

    expect(intersection(test1, test2)).toEqual([1,2,3,4,5]);
  });

  it('Returns only one instance of each intersection in the output array', function(){
    var test1 = [1,2,1,2,1,2];
    var test2= [2,1,3,2,1,4];

    expect(intersection(test1, test2)).toEqual([1,2]);
  });
});
