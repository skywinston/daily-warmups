module.exports = {

  longestSubstring: function(string){
    var substrings = string.split(' ');
    var currentLongest = 0;
    for (var i = 0; i < substrings.length; i++) {
      if(substrings[i].length > currentLongest){
        currentLongest = substrings[i].length;
      }
    }
    return currentLongest;
  },

  longestSubReduce: function(string){
    return string.split(' ').reduce(function(prev, curr){
      return curr.length > prev.length ? curr : prev;
    }).length;
  },

  longestSubRecursive: function(string){
    var substrings = string.split(' ');
    var currentLongest = 0;
    function go(substrings){
      if(substrings.length === 0){
        return currentLongest;
      }

      if(substrings[0].length > currentLongest){
        currentLongest = substrings[0].length;
        substrings.shift();
        return go(substrings);
      } else {
        substrings.shift();
        return go(substrings);
      }
    }
    return go(substrings);
  }

}
