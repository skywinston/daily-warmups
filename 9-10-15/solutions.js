// Andrew Varnell
function toLinkedList(sentence){
  var wordArray = sentence.split(' ');
  var output = new LinkedList(new Node(wordArray.shift()));
  var node = output.head;

  wordArray.forEach(function(word){
      word = new Node(word);
      node.next = word;
      node = word;
  })
  return output;
}

function commonDataBetweenLists(list1, list2) {
  var commonArray = [];
  var nodeFirst = list1.head;
  var nodeSecond = list2.head;

  while(nodeFirst){
      var dataToCheck = nodeFirst.data;
      while(nodeSecond){
          if(nodeSecond.data == dataToCheck){
              commonArray.push(dataToCheck);
          }
          nodeSecond = nodeSecond.next;
      }
      nodeSecond = list2.head;
      nodeFirst = nodeFirst.next;
  }
  return commonArray;
}

// Andrew Mockett
function sentenceToLL(sentence){
  var array = sentence.split(" ");
  var linkedList = new LinkedList(new Node(array[0]));
  var newArray = array.slice(1);

  function go(arr){
    if (arr.length === 1){ return new Node(arr[0], null) };
    return new Node(arr[0], go(arr.slice(1)));
  }

  linkedList.head.next = go(newArray);
  return linkedList;
}

function sentenceToLL(sentence){
  var array = sentence.split(" ");
  function go(arr){
    if (arr.length === 1){ return new Node(arr[0], null) };
    return new Node(arr[0], go(arr.slice(1)));
  }
  return new LinkedList(go(array));
}

// Stephen Florian
function sentenceToLinkedList(sentence){
  var split = sentence.split(' ');
  function go(split, index){
    return split[index] ? new Node(split[index], go(split, index+1)) : null ;
  }
  return new LinkedList(new Node(split[0], go(split, 1)));
}

// David Yoakam
function commonDataBetweenLists(list1, list2) {
  var output = [];

  function go (list1Node, list2Node) {
    if (!list1Node) return;

    function goAgain (list1Node, list2Node) {
      if (!list2Node) return;
      if (list1Node.data == list2Node.data) {
        output.push(list2Node.data);
      }
      return goAgain (list1Node, list2Node.next)
    }

    var list2Node = list2.head;
    goAgain(list1Node, list2Node)
    return go (list1Node.next, list2Node)
  }

  go(list1.head, list2.head)
  return output;
}

console.log(commonDataBetweenLists(l1, l2));
// ['barski’]
