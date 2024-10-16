class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    const newNode = new LinkedListNode(val);
    if(this.head) newNode.next = this.head; 
    this.head = newNode;
    this.length++;
  }

  addToTail(val) {
    if(!this.head){
      this.head = new LinkedListNode(val);
      this.length++;
      return;
    } 
    let node = this.head;
    while(node.next != null){
      node = node.next;
    }
    node.next = new LinkedListNode(val);
    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;