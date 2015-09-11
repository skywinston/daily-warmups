// Write a multiply function that multiplies two integers without using *.
function multiply(x, y){
  var output = 0;
  for(var i = 0; i < x; i++){
    output+=y;
  }
  return output;
}

console.log(multiply(3,6)); //→ 18


// Write a function named isPalindrome that takes a string and determines if it is a palindrome.
function isPalindrome(string){
  var arr = string.split('');
  while(arr.length > 1){
    if (arr[0]==arr[arr.length-1]){
      arr.pop();
      arr.shift();
    } else {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('racecar')); //→ true
console.log(isPalindrome('super')); //→ false
console.log(isPalindrome('evil olive')); // Deal with spaces & special chars

// You are given an array with integers between 1 and 1,000,000, but one integer is missing. Write a function that determines the missing value.
function missingInteger(array){
  for(var i = 0; i < array.length; i++){
    if( array[i+1]-array[i] !== 1 ){
      return array[i]+1;
    }
  }
  return "No numbers missing";
}

console.log(missingInteger([0,1,2,3,4,5,6,8,9,10]));
