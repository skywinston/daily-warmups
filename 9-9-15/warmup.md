##### 1. What is a Linked List? What are the benefits of using a Linked List?

The primary advantage that linked lists provides is quick insertion and deletion of data.

##### 2. Read about the Collatz Conjecture and implement a recursive solution that displays the Collatz Sequence for a given positive integer, `n`:
```
> console.log(collatzSequence(13));
  13 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

  > console.log(collatzSequence(252));
  252 -> 126 -> 63 -> 190 -> 95 -> 286 -> 143 -> 430 -> 215 -> 646 -> 323 -> 970 -> 485 -> 1456 -> 728 -> 364 -> 182 -> 91 -> 274 -> 137 -> 412 -> 206 -> 103 -> 310 -> 155 -> 466 -> 233 -> 700 -> 350 -> 175 -> 526 -> 263 -> 790 -> 395 -> 1186 -> 593 -> 1780 -> 890 -> 445 -> 1336 -> 668 -> 334 -> 167 -> 502 -> 251 -> 754 -> 377 -> 1132 -> 566 -> 283 -> 850 -> 425 -> 1276 -> 638 -> 319 -> 958 -> 479 -> 1438 -> 719 -> 2158 -> 1079 -> 3238 -> 1619 -> 4858 -> 2429 -> 7288 -> 3644 -> 1822 -> 911 -> 2734 -> 1367 -> 4102 -> 2051 -> 6154 -> 3077 -> 9232 -> 4616 -> 2308 -> 1154 -> 577 -> 1732 -> 866 -> 433 -> 1300 -> 650 -> 325 -> 976 -> 488 -> 244 -> 122 -> 61 -> 184 -> 92 -> 46 -> 23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1
```

##### Solution:
```
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
console.log(collatzSequence(13));   // matches solution above
console.log(collatzSequence(252));  // matches solution above
```

##### 3. Taken from interview cake, what is the resulting value that is `console.log`-ed in the following code example:
```
var text = 'outside';
  function logIt(){
      console.log(text);
      var text = 'inside';
  };
  logIt();
```

##### Solution:

`undefined`

This happens because the variable text is hoisted to the top of the function `logIt`, so when `console.log(text)` runs, the variable `text` has only been **declared** but not **assigned**.
