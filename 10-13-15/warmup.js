module.exports = {

  toDecimal : function(binary){
    return parseInt(binary, 2);
  },

  capitalizeFish : function(fishArray){
    return fishArray.reduce(function(arr, fish){
      var temp = fish.trim().split(' ');
      var fishOne = temp[0][0].toUpperCase() + temp[0].slice(1);
      var fishTwo = temp[1][0].toUpperCase() + temp[1].slice(1);
      arr.push( fishOne + " " + fishTwo );
      return arr;
    }, []);
  }

}
