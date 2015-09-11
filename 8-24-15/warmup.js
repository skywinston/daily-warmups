// Given two arrays of Numbers, return an array containing elements common to both arrays, for example:
// var test1 = [1,2,3,4,5];
// var test2 = [3,4,7,8,9];
//
// console.log(intersection(test1, test2)); // [3,4]
//
// var test3 = [];
// console.log(intersection(test1, test3)); // []
// console.log(intersection(test2, test3)); // []

function intersection(array1, array2){
  var output = [];
  for (var i = 0; i < array1.length; i++){
    for (var j = 0; j<array2.length; j++){
      if (array2[j]===array1[i]){
        output.push(array2[j]);
      }
    }
  }
  return output;
}

var test1 = [1,2,3,4,5];
var test2 = [3,4,7,8,9];
console.log(intersection(test1, test2)); //→ [3,4] // ✅

var test3 = [];
console.log(intersection(test1, test3)); //→ []  // ✅

// Given a string, determine if all of the characters in the string are unique or not. This function, allCharsUnique should return a Boolean value.
function allCharsUnique(string){
  var arr = string.split(''),
      unique = 0;
  var comparitor = arr.reduce(function(obj,curr){
    typeof obj[curr] !== "undefined" ? obj[curr]++ : obj[curr]=1;
    return obj;
  }, {})
  for (var prop in comparitor){
    if (comparitor[prop] > 1){
      unique++;
    }
  }
  if (unique > 0){
    return false
  } else {
    return true;
  }
}

var testStr = "abcdefghijk";
var testStr2 = "abab";
var testStr3 = "bacc";
console.log(allCharsUnique(testStr)); //→ true // ✅
console.log(allCharsUnique(testStr2)); //→ false // ✅
console.log(allCharsUnique(testStr3)); //→ false // ✅
