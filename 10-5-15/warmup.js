var test1 = [1,2,3,4,5];
var test2 = [3,4,7,8,9];
var test3 = [];

function intersection(arr1, arr2){
  var intersections = [];
  for(var i = 0; i < arr1.length; i++){
    if( arr2.indexOf(arr1[i]) > -1 ) intersections.push(arr1[i]);
  }
  return intersections;
}

console.log(intersection(test1, test2)); // [3,4]
console.log(intersection(test1, test3)); // []
console.log(intersection(test2, test3)); // []
