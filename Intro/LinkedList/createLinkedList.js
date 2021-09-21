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
}

let list = new LinkedList(4);
list.append(10);
list.append(15);
list.prepend(1);
list.prepend(90);

console.log(list.head);
console.log(list.tail);
