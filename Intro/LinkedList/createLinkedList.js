class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(val) {
    const newNode = {
      value: val,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(val) {
    const newNode = {
      value: val,
      next: this.head,
    };

    this.head = newNode;
    this.length++;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  remove(index) {
    const leader = this.traversalToIndex(index - 1);
    const follower = this.traversalToIndex(index + 1);
    delete leader.next;
    leader.next = follower;
	this.length --;
  }

  insert(index, val) {
    if (index >= this.length) {
      this.append(val);
    }
    const newNode = {
      value: val,
      next: null,
    };

    const leader = this.traversalToIndex(index - 1);

    const holdPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdPointer;
    this.length++;
    return this.printList();
  }

  traversalToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

let list = new LinkedList(4);
list.append(10);
list.append(15);
list.prepend(1);
list.prepend(90);
console.log(list.printList());
// list.insert(4, 99);
list.remove(4);
list.remove(1);
console.log(list.printList());
// console.log(list.head);
// console.log(list.tail);
