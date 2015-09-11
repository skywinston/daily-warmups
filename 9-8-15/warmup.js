function power(number, exponent){
  if (exponent === 0) return 1;
  return number*power(number, exponent-1)
}
console.log(power(2,3));

function palindrome(string){
  string = string.toLowerCase().replace(/\s/g, '');
  if(string.length <= 1) return true;
  return string.slice(0,1) !== string.slice(-1) ? false : palindrome(string.slice(1,-1));
}
console.log(palindrome('racecar'));  //→ true
console.log(palindrome('donkey'));  //→ false
console.log(palindrome('Animal loots foliated detail of stool lamina')); //→ true
