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

  static exists(root, value) {
    if(root === null) {
      return false;
    }
    if(value === root.value) {
      return true;
    }
    if(value >= root.value) {
      return this.exists(root.right, value);
    }
    return this.exists(root.left, value);
  }
}
