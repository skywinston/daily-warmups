var code = require('../src.js');

describe('removeDupes', function(){
  it('Takes a string and removes all duplicate characters in the String.', function(){
    expect(code.removeDupes("AABB")).toEqual('AB');
    expect(code.removeDupes('AaAaBbBb')).toEqual('AaBb');
    expect(code.removeDupes('cAtCaT')).toEqual('cAtCaT');
  });
});

describe('insensitiveRemoveDupes', function(){
  it('which takes a string and removes all duplicate characters regardless of capitalization.', function(){
    expect(code.insensitiveRemoveDupes('AABB')).toEqual('AB');
    expect(code.insensitiveRemoveDupes('AaAaBbBb')).toEqual('AB');
    expect(code.insensitiveRemoveDupes('cAtCaT')).toEqual('cAt');
  });
});
