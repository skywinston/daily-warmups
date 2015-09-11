### As of the time of this writing, my understanding of `apply` and `call` needs improvement.

##### What is `Function.prototype.call`?  

Allows you to call a function on `this` with a list of arguments.  

##### Give an example that uses `Function.prototype.call`  

```
function Person (name){
  this.name = name;
  singHello = function(){
    return "Helloooooo " + this.name;
  }
}

var charles = new Person();

function Flower (name){
  this.name = name;
}

var rose = new Flower();

charles.call(singHello, rose);

//→ "Hellooooo rose"
```

##### What is `Function.prototype.apply`?  

`apply` is just like `call`, except that it provides a list or arguments in an array-like object.  

##### Give an example that uses `Function.prototype.apply`  

Using the example from above:

```
var rose = new Flower();
var tulip = new Flower();
var daisy = new Flower();

var charles = new Person();

charles.call(singHello, [rose, tulip, daisy]);

//→ "Hellooooo rose tulip daisy";
```  

##### What is the difference between `Function.prototype.call` and `Function.prototype.apply?`  

They are very similar.  Unlike `apply` which passes the second parameter as an array-like object of arguments, with `call` you just add arguments on the end.  

##### Create an example of an inheritance hierarchy that uses `Function.prototype.call` or `Function.prototype.apply` to reduce duplication in constructor code.  

```
function Person (name){
  this.name = name;
  reportName = function(){
    "Hello, my name is " + this.name;
  }
}

function Mammal (species, name){
  this.name = name;
  this.species = species;
  this.greeting = Person.prototype.call(reportName, this.name);
}

var billy = new Person();
var fluffy = new Mammal('dog', 'Fluffy');

fluffy.greeting;

//→ "Hello, my name is Fluffy"
```
