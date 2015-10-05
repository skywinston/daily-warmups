function intersection(arr1, arr2){
  var intersections = [];
  for(var i = 0; i < arr1.length; i++){
    if( arr2.indexOf(arr1[i]) > -1 && intersections.indexOf(arr1[i]) === -1 ){
      intersections.push(arr1[i]);
    }
  }
  return intersections;
}

module.exports = intersection;
