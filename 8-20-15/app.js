// Write a function named addString that takes a string of arithmetic involving addition and returns the proper value. For example addString("10+20+30"); would return 60 (as a Number).

function addString(string){
  var output = string.split('+');
  console.log(output);
  output = output.reduce(function(prev,curr){
    return Number(prev) + Number(curr);
  })
  return output;
}

var str = "10+20+30";
var test1 = addString(str);
console.log(test1); //→ 60 // ✅


// Write a function named multiplyString that takes a string of arithmetic involving addition and returns the proper value. For example multiplyString("10*20*30"); would return 6000 (as a Number).
function multiplyString(string){
  var output = string.split('*');
  output = output.reduce(function(prev,curr){
    return Number(prev) * Number(curr);
  })
  return output;
}

var str2 = "10*20*30";
var test2 = multiplyString(str2);
console.log(test2);  //→ 6000  // ✅

// Question 3 answered in question3.md
