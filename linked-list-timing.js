const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

let ll = new LinkedList;
let dll = new DoublyLinkedList;

console.time("LL-HEAD-1000000")
for(let i = 0; i < 1000000; i++){
    ll.addToHead(i);
};
console.timeEnd("LL-HEAD-1000000");

console.time("DLL-HEAD-1000000")
for(let i = 0; i < 1000000; i++){
    dll.addToHead(i);
};
console.timeEnd("DLL-HEAD-1000000");

console.time("LL-TAIL-10000")
for(let i=0; i < 10000; i++){
    ll.addToTail(i);
}
console.timeEnd("LL-TAIL-10000");

console.time("DLL-TAIL-10000")
for(let i=0; i < 10000; i++){
    dll.addToTail(i);
}
console.timeEnd("DLL-TAIL-10000");

// Your code here