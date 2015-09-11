##### 1. Write a function which takes two linked lists and returns an array of the data that exists in both lists. The following is implementation of `LinkedList` and `Node` that you may use and (sample) test cases:
```
function LinkedList(head) {
    this.head = head;
  }

  function Node(data, next) {
    this.data = data;
    this.next = next;
  }

  function commonDataBetweenLists(list1, list2) {
    // your code here
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

  console.log(commonDataBetweenLists(l1, l2));
  // ['barski']
```

##### 2. Write a function `sentenceToLinkedList` that takes a sentence, where a sentence is defined as a collection of words separated by a single whitespace character (no need to worry about punctuation), and turns the sentence into a linked list where each word is the data value of a node. You may use the implementations for LinkedList and Node provided above. Usage looks like:
```
var sentence = 'This is a typical sentence';
  console.log(sentenceToLinkedList(sentence));
  // { head: { data: 'This', next: { data: 'is', next: [Object] } } }
```
