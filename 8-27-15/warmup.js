// Write a function called toDecimal which takes a binary number and converts it to decimal. Here are some examples:

// Write a function named removeDupes which takes a string and removes all duplicate characters in the String. Here are some examples:
// removeDupes('AABB'); // 'AB'
// removeDupes('AaAaBbBb'); // 'AaBb'
// removeDupes('cAtCaT'); // 'cAtCaT'
function removeDupes(string){
  var arr = string.split('');
  var firstOccurence = [];
  for (var i = 0; i < arr.length; i++) {
    if (firstOccurence.indexOf(arr[i]) === -1){
      firstOccurence.push(arr[i])
    }
  }
  return firstOccurence.join('');
}

console.log(removeDupes('AABB')); //→ AB
console.log(removeDupes('AaBb')); //→ AaBb
console.log(removeDupes('cAtCaT')); //→ cAtCaT

// Write a function named insensitiveRemoveDupes which takes a string and removes all duplicate characters regardless of capitalization. Here are some examples:
// removeDupes('AABB'); // 'AB'
// removeDupes('AaAaBbBb'); // 'AB'
// removeDupes('cAtCaT'); // 'cAt'
function insensitiveRemoveDupes(string){
  var output = '';
  for (var i = 0; i < string.length; i++){
    if (output.toLowerCase().indexOf(string.charAt(i).toLowerCase()) < 0){
      output += string.charAt(i);
    }
  }
  return output;
}

console.log(insensitiveRemoveDupes('AABB')); //→ AB
console.log(insensitiveRemoveDupes('AaAaBbBb')); //→ AB
console.log(insensitiveRemoveDupes('cAtCaT')); //→ cAt
