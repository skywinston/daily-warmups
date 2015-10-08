module.exports = {

  bookData : function(array){
    var output = {};
    for(var i = 0; i < array.length; i++){
      var isbn = array[i].pop();
      var obj = {};
      obj["title"] = array[i][0];
      obj["author"] = array[i][1];
      obj["isbn10"] = isbn;
      output[isbn.toString()] = obj;
    }
    return output;
  }

}
