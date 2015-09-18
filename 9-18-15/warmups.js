function zipArrays(arr1, arr2){
  var output = [];
  for (var i = 0; i < arr1.length; i++) {
    output.push(arr1[i]);
    output.push(arr2[i]);
  }
  return output;
}
console.log(zipArrays([1,2,3], [4,5,6])); //→ [1,4,2,5,3,6]

function zipRecursively(arr1, arr2){
  var output = [];
  function go(arr1, arr2){
    if(arr1.length === 0 && arr2.length === 0){
      return;
    }
    output.push(arr1.shift());
    output.push(arr2.shift());
    return go(arr1, arr2);
  }
  go(arr1, arr2);
  return output;
}
console.log(zipRecursively([1,2,3], [4,5,6]));

function parseQueryString(url){
  return url.slice(url.indexOf('?')+1).split('&').reduce(function(prev, curr){
    var keyVal = curr.split('=');
    prev[keyVal[0]] = keyVal[1];
    return prev;
  }, {});
}
console.log(parseQueryString('http://www.reddit.com/r/aww/search?q=dogs&sort=top&t=week'));
