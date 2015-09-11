function LinkedList(head) {
    this.head = head;
  }

function Node(data, next) {
  this.data = data;
  this.next = next;
}

var l1 = new LinkedList(new Node("This is the head"));
var foo = new Node('fooski');
var bar = new Node('barski');
l1.head.next = foo;
foo.next = bar;

var l2 = new LinkedList(new Node("something cool!"));
var goo = new Node('gooski');
var bar2 = new Node('barski');
l2.head.next = bar2;
bar2.next = goo;




function commonDataBetweenLists(list1, list2) {
  var output = [];
  // while(list1.next !== null){
  //   // do something...
  // }
}
// console.log(commonDataBetweenLists(l1, l2));
// ['barski']

function sentenceToLinkedList(string){
  var sentence = string.split(' ');
  var output = new LinkedList(new Node(sentence.shift()));
  var node = output.head;

  output.forEach(function(word){
    word = new Node(word);
    node.next = word;
    node = word;
  })
  return output;
}

var testSentence = "This is my test for sentence to linked list";
console.log(sentenceToLinkedList(testSentence));
