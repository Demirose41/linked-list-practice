class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    let newNode = new DoublyLinkedListNode(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    }else{
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
    }
    
  }

  addToTail(val) {
    let newNode = new DoublyLinkedListNode(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    }else{
      let node = this.tail;
      node.next = newNode;
      newNode.prev = node;
      this.tail = newNode;
      this.length++;
    }
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;