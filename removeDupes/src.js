module.exports = {

  removeDupes : function(string){
    var uniques = [];
    for (var i = 0; i < string.length; i++) {
      if(uniques.indexOf(string[i]) == -1){
        uniques.push(string[i]);
      }
    }
    return uniques.join('');
  },

  insensitiveRemoveDupes : function(string){
    var uniques = [];
    for (var i = 0; i < string.length; i++) {
      if(uniques.indexOf(string[i].toLowerCase()) == -1 && uniques.indexOf(string[i].toUpperCase()) == -1){
        uniques.push(string[i]);
      }
    }
    return uniques.join('');
  }

}
