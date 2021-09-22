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

  insert(index, val) {
    if (index >= this.length) {
      this.append(val);
    }
    let newNode = {
      value: val,
      next: null,
    };

    let leader = this.traversalToIndex(index - 1);

    const holdPointer = leader.next;
    newNode.next = holdPointer;
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
list.insert(99, 23);
console.log(list.printList());
// console.log(list.head);
// console.log(list.tail);
