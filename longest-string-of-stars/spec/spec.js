var code = require('../src.js');

describe('longestSubstring', function(){
  it('returns the length of the longest consecutive string of *', function(){
    expect(code.longestSubstring("*** *** **")).toEqual(3);
    expect(code.longestSubstring("*** *** **** *")).toEqual(4);
    expect(code.longestSubstring("* **")).toEqual(2);
  });
});

describe('longestSubReduce', function(){
  it('returns the length of the longest consecutive string of *', function(){
    expect(code.longestSubReduce("*** *** **")).toEqual(3);
    expect(code.longestSubReduce("*** *** **** *")).toEqual(4);
    expect(code.longestSubReduce("* **")).toEqual(2);
  });
});
