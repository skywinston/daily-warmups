var str1 = 'This is my string.';
var str2 = 'Make me backwards plz';

function reverse (string){
  return string.split('').reverse().join('');
}

var test1 = reverse(str1);
// console.log(test1);
//→ 'gnirts ym si sihT'

function reverseMod (string){
  string = string.split('').reverse().join(''); //returns undefined
  return string;
}

var test2 = reverseMod(str2);
// console.log(str2);

// Using the half-index switch for loop
function reverseHalfI(s) {
  s = s.split('');
  var len = s.length,
      halfIndex = Math.floor(len / 2) - 1,
      tmp;
  for (var i = 0; i <= halfIndex; i++) {
    tmp = s[len - i - 1];
    s[len - i - 1] = s[i];
    s[i] = tmp;
  }
  return s.join('');
}

var str3 = "make me backwards";
var test3 = reverseHalfI(str3);
console.log(str3);
console.log(test3);
