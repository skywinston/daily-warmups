##### 1. Explain what recursion is to a beginner developer.

Recursion refers to a function that calls itself repeatedly.  These functions will define a base case, or a condition which, when met, exits the recursive loop.  The recursive case, where the function calls itself, modifies the arguments that it passes to itself with each iteration, getting closer to the base case each time.

##### 2.  Define a recursive function named `power` which takes two arguments; a `number` and and `exponent` to raise that number to.  For example:
```
console.log(power(2, 3));
  //=> 8

  console.log(power(4, 2));
  //=> 16
```

##### Solution:
```
function power(number, exponent){
  if (exponent === 0){
    return 1;
  }
  return number*power(number, exponent-1)
}
console.log(power(2,3));
```

##### 3. Define a recursive function named `palindrome` that returns `true` if a string is a palindrome and `false` otherwise.

##### Solution:
```
function palindrome(string){
  string = string.toLowerCase().replace(/\s/g, '');
  if(string.length <= 1) return true;
  return string.slice(0,1) !== string.slice(-1) ? false : palindrome(string.slice(1,-1));
}
```
