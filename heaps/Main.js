import MaxHeap from './MaxHeap.js';

const heap = new MaxHeap();
heap.insert(1);
heap.insert(2);
heap.insert(3);
heap.insert(5);
heap.insert(32);
heap.insert(21);
heap.print();

console.log(heap.extractMax());
heap.print();

console.log(heap.sort());
