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

    return this.head;
  }

  prepend(val) {
    let newNode = {
      value: val,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }

  logTheList() {
    let arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return arr;
  }

  insert(index, val) {
    let newNode = {
      value: val,
      next: null,
    };

    let leader = this.findLeaderValue(index - 1);
    let followerNode = leader.next;
    leader.next = newNode;
    newNode.next = followerNode;

    return this.logTheList();
  }

  findLeaderValue(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }
}

const list = new LinkedList(2);
list.append(7);
list.append(8);
list.append(10);
list.prepend(10);
list.prepend(12);
list.prepend(77);
list.prepend(11);
list.prepend(17);
// console.log(list.head);
list.insert(4, 9);
console.log(list.logTheList());
