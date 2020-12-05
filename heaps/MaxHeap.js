export default class MaxHeap {

  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(parentIndex) {
    return 2 * (parentIndex + 1);
  }

  getLeftChild(parentIndex) {
    return this.heap[this.getLeftChildIndex(parentIndex)];
  }

  getRightChild(parentIndex) {
    return this.heap[this.getRightChildIndex(parentIndex)];
  }

  getRightChildIndex(parentIndex) {
    return 2 * (parentIndex + 2);
  }

  getParentIndex(childIndex) {
    return this.floor((childIndex - 1) / 2);
  }

  swap(index1, index2) {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  heapifyUp() {
    // start at last
    let index = this.heap.length - 1;
    while( this.hasParent(index) && this.getParent(index) < this.heap[index]) {
      const parentIndex = this.getParentIndex(index);
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  print() {
    this.heap.forEach((val, index) => console.info(`heap[${index}] = ${val}`));
  }

  hasParent(idx) {
    return this.floor((idx - 1) / 2) > -1;
  }

  getParent(idx) {
    return this.heap[this.getParentIndex(idx)];
  }

  floor = x => Math.floor(x);

  extractMax() {
    const maxItem = this.heap[0];
    this.swap(0, this.heap.length - 1);
    this.heap.pop();
    this.heapifyDown();
    return maxItem;
  }

  heapifyDown() {
    let index = 0;
    while(this.hasLeftChild(index)) {
      let smallerValueIndex = this.getLeftChildIndex(index);
      if(this.hasRightChild(index) && this.getLeftChild(index) < this.getRightChild(index)) {
        smallerValueIndex = this.getRightChildIndex(index);
      }

      if(this.heap[index] > this.heap[smallerValueIndex]) {
        break;
      } else {
        this.swap(index, smallerValueIndex);;
      }

      index = smallerValueIndex;
    }
  }

  hasLeftChild(parentIdx) {
    return (2*parentIdx + 1) < this.heap.length;
  }
  hasRightChild(parentIdx) {
    return (2*parentIdx + 2) < this.heap.length;
  }
}
