function collatzSequence(num){
  var output = '';
  function go(num){
    if(num === 1) return 1;
    output += num + '->';
    return num % 2 === 0 ? go(num/2) : go(num*3+1);
  }
  go(num);
  return output.slice(0,-2);
}
console.log(collatzSequence(13));
console.log(collatzSequence(252));
