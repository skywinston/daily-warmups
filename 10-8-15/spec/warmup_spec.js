var code = require('../warmup.js');

describe('bookData', function(){
  it('Takes nested arrays of book info and turns it into nested objects', function(){
    var books = [
      ["Learn to Program", "Chris Pine", 1934356360],
      ["Eloquent Javascript", "Marijn Haverbeke", 1593275846]
    ];
    expect(code.bookData(books)).toEqual({
      "1934356360": {
        "title": "Learn to Program",
        "author": "Chris Pine",
        "isbn10": 1934356360
      },
      "1593275846": {
        "title": "Eloquent Javascript",
        "author": "Marijn Haverbeke",
        "isbn10": 1593275846
      }
    });
  });
});
