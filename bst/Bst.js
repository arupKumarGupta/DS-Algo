import { Node } from './Node.js';

/**
 * Node Structure
 * Node {
 *  value: any, key:any , left: Node, right: Node
 * }
 */
export default class BST {

  constructor() {
    this.root = null;
  }

  add(root, value) {
    if (root === null) {
      root = new Node(value, this.inc);
    } else {
      const currentNode = root;
      if (currentNode.value > value) {
        // greater
        if (root.left === null) {
          console.log(`Inserting value #${value} in BST`);
          root.left = new Node(value, this.inc);
        } else {
          this.add(root.left, value);
        }
      } else {
        // lesser or equal
        if (root.right === null) {
          console.log(`Inserting value #${value} in BST`);
          root.right = new Node(value, this.inc);
        } else {
          this.add(root.right, value);
        }
      }
    }
    this.inc += 1;
    return root;
  }

  static inorderTraversal(root) {
    if (root !== null) {
      this.inorderTraversal(root.left);
      console.log(root.value);
      this.inorderTraversal(root.right);
    }
  }

  static preorderTraversal(root) {
    if (root !== null) {
      console.log(root.value);
      this.preorderTraversal(root.left);
      this.preorderTraversal(root.right);
    }
  }

  static postOrderTraversal(root) {
    if (root !== null) {
      this.postOrderTraversal(root.left);
      this.postOrderTraversal(root.right);
      console.log(root.value);
    }
  }

  static find(root, value) {
    if (root === null) {
      return root;
    }
    if (value === root.value) {
      return root;
    }
    if (value >= root.value) {
      return this.find(root.right, value);
    }
    return this.find(root.left, value);
  }

  delete(node, value) {
    if (node === null) {
      return null;
    }
    if (node.value > value) {
      node.left = this.delete(node.left, value);
      return node;
    }
    if (node.value < value) {
      node.right = this.delete(node.right, value);
      return node;
    } else {
      // node with no child
      if (node.left === null && node.right === null) {
        return null;
      }
      if (node.left === null) {
        // node with single child
        node.value = node.right.value;
        node = this.delete(node.right, value);
        return node;
      }
      if (node.right === null) {
        // node with single child
        node.value = node.left.value;
        node = this.delete(node.left, value);
        return node;
      }
      const minInRightSubtree = this.findMin(node.right);
      node.value = minInRightSubtree.value;
      node.right = this.delete(node.right, minInRightSubtree.value);
    }
    return node;
  }

  findMin(root) {
    if (root === null) {
      return null;
    }
    let currentMin = root;
    while (currentMin.left !== null) {
      currentMin = currentMin.left;
    }

    return currentMin;
  }
}
