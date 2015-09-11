// Write a function named subtractString that takes a string of arithmetic involving addition and returns the proper value. For example subtractString("10-20-30"); would return -40 (as a Number).
function substractString(string){
  return string.split('-').reduce(function(prev,curr){
    return Number(prev) - Number(curr);
  })
}
console.log(substractString("10-20-30"));
//→ -40  // ✅


// Write a function named divideString that takes a string of arithmetic involving addition and returns the proper value. For example divideString("10/20"); would return 0.5 (as a Number). What is the edge case in division? Do not worry about covering it but please explain what it is.
function divideString(string){
  return string.split('/').reduce(function(prev,curr){
    return Number(prev) / Number(curr);
  })
}
console.log(divideString('10/20'));
//→ 0.5  // ✅

// What are the two fundamental characteristics of Objects?
//→ State & Behavior
