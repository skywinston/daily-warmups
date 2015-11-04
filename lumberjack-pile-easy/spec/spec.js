var pileLogs = require('../src.js');

describe('pileLogs', function(){
  it('evenly distributes logs in a grid of piles until the logs run out', function(){
    expect(pileLogs(3, 7, [1,1,1,2,1,3,1,4,1])).toEqual([[3,2,2],[2,2,3],[2,4,2]]);
  })
})
