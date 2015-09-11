##### 1. What is the difference between `call` and `apply`?  Provide an example of each.


##### 2. Write a function charCounts that when given a string, produces a map of character counts. Usage would look like:
```
> console.log(charCounts("This is a string!!!"))
{ T: 1, h: 1, i: 3, s: 3, ' ': 3, a: 1, t: 1, r: 1, n: 1, g: 1, '!': 3 }

> console.log(charCounts("!Data!Is~The*Coolest"))
{ '!': 2,
  D: 1,
  a: 2,
  t: 2,
  I: 1,
  s: 2,
  '~': 1,
  T: 1,
  h: 1,
  e: 2,
  '*': 1,
  C: 1,
  o: 2,
  l: 1 }
```


##### Solution:

```
function charCounts(string){  
  return string.split('').reduce(function(prev, curr){
    prev[curr] === undefined ? prev[curr]=1 : prev[curr]++;
    return prev;
  }, {});
}

console.log(charCounts("This is a string!!!"));
```  

##### 3. Write constructors that make the following examples work:
```
// 1. construct cows that can moo
> var bessy = new Cow("Bessy", 10);
> console.log(bessy.moo());
moooooooo I'm Bessy moooooooo!!!!!!
> var mooey = new Cow("Mooey", 2);
> console.log(mooey.moo());
moooooooo I'm Mooey moooooooo!!!!!!
> var chewy = new Cow("Chewy", 1);
> console.log(chewy.moo());
moooooooo I'm Chewy moooooooo!!!!!!
// 2. construct a farm full of cows, where all cows can be called on to moo in turn
> var farm = new CowFarm([bessy, mooey, chewy]);
> console.log(farm.mooInOrder());
moooooooo I'm Bessy moooooooo!!!!!!
moooooooo I'm Mooey moooooooo!!!!!!
moooooooo I'm Chewy moooooooo!!!!!!
```

##### Solution:
```
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
```
