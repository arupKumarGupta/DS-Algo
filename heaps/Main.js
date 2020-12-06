import MaxHeap from './MaxHeap.js';

// const heap = new MaxHeap();
// heap.insert(1);
// heap.insert(2);
// heap.insert(3);
// heap.insert(5);
// heap.insert(32);
// heap.insert(21);
// heap.print();

// console.log(heap.extractMax());
// heap.print();
// console.log("\n\n")


const randomHeap = new MaxHeap([1,2,3,4,5,6]);
// randomHeap.print();

console.log(`\nHeap Sort\n`);
console.log(randomHeap.sort());

