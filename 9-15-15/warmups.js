function translate(string){
  var output = '';
  for (var i = 0; i < string.length; i++){
    switch (string[i].toLowerCase()){
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      case ' ':
        output += string[i];
        break;
      default:
        output += string[i] + 'o' + string[i];
    }
  }
  return output;
}
console.log(translate("this is fun")); //→ tothohisos isos fofunon

function translate2(string){
  var output = '';
  for (var i = 0; i < string.length; i++) {
    output += string[i].toLowerCase() === ('a' || 'e' || 'i' || 'o' || 'u' || ' ') ? string[i] : string[i] + 'o' + string[i];
    // 'a' will always evaluate to truthy, so it will never evaluate the other vowels.
  }
  return output;
}
console.log(translate2("this is fun")); //→ tothohisos isos fofunon
