// Write a function called strip which removes all leading and trailing whitespace from a string, but preserves whitespace not found at the beginning or end of the string.
function strip(string){
  var stripped = string.split('');
  while (stripped[0]===" ") {
    stripped.shift();
  }
  while (stripped[stripped.length-1]===" "){
    stripped.pop();
  }
  return stripped.join('');
}

console.log(strip("     This is a string with the spaces at the end chopped off  "));

// You are given an array with integers between 1 and 1,000,000. One integer is in the array twice. How can you determine which one?
function inArrayTwice(array){
  var firstOccurence;
  for(var i = 0; i < array.length; i++){
    firstOccurence = array.indexOf(array[i]);
    if(array.indexOf(array[i], firstOccurence+1) > -1){
      return array[i];
    }
  }
  return null // If no second occurence is found
}

console.log(inArrayTwice([1,2,3,4,5,6,7,8,5,9])); //→ 5

// Find the only element in an array that only occurs once. For example in [1,2,2,3,3,5,5,1,6], 6 is the only element that occurs precisely one time.
function appearsOnce(array){
  //code...
}
