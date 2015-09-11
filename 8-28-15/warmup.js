// What is the decimal value of 1233215 in base 7?
// 1*7^6 + 2*7^5 + 3*7^4 + 3*7^3 + 2*7^2 + 1*7^1 + 5*7^0
// 159605


// Write a function named rotateEvenIndices that take a String argument, here are sample tests to illustrate the behavior:
// var string = 'foobar';
// var rotatedOnce = rotateEvenIndices(string);
// console.log(rotatedOnce);
//
// var rotatedTwice = rotateEvenIndices(rotatedOnce);
// console.log(rotatedTwice);
//
// var backToOriginal = rotateEvenIndices(rotatedTwice);
// console.log(string === backToOriginal); // true
function rotateEvenIndices(string){
  var rotatedString = string.length%2===0 ? string.slice(-2, -1) : string.slice(-1);
    for (var i = 0, j = 1; i < string.length; i+=2, j+=2) {
    rotatedString += string.charAt(j);
    rotatedString += string.charAt(i);
  }
  return rotatedString.slice(0, string.length);
}

var rotatedOnce = rotateEvenIndices('foobar');
console.log(rotatedOnce); //→ 'aofbor' // ✅

var rotatedTwice = rotateEvenIndices(rotatedOnce);
console.log(rotatedTwice); //→ 'ooabfr'  // ✅

var backToOriginal = rotateEvenIndices(rotatedTwice);
console.log(backToOriginal); //→ 'foobar'  // ✅


// Suppose you are given an array of integers. Find the largest product of any pair of integers in the array. Some examples:
// console.log(greatestProductOfPairs([2,3,4,-5,92,100])); // 9200
// console.log(greatestProductOfPairs([-2,3,-4,-5,-92,-100])); // 9200
