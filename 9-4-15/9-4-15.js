function charCounts(string){
  return string.split('').reduce(function(prev, curr){
    prev[curr] === undefined ? prev[curr]=1 : prev[curr]++;
    return prev;
  }, {});
}
// console.log(charCounts("This is a string!!!"));

function Cow(name, age){
  this.name = name;
  this.age = age;
}

Cow.prototype.moo = function(){
  return "moooooooooooo I'm " + this.name + " mooooooooo!!!!!!";
}

function CowFarm(arrayOfCows){
  this.pasture = arrayOfCows;
}

CowFarm.prototype.mooInOrder = function(){
  return this.pasture.map(function(cow){
    return cow.moo();
  }).join('\n');
}

var bessy = new Cow("Bessy", 10);
var mooey = new Cow("Mooey", 2);
var chewy = new Cow("Chewy", 1);

var farm = new CowFarm([bessy, mooey, chewy]);
console.log(farm.mooInOrder());
