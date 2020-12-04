import BST from './Bst.js';

const bst = new BST();
console.log('######### Insertions ########');
// insertion

/*
        7
      /  \
     5    9
   / \   /  \
  3   6 8    10
 /
2
  */
bst.root = bst.add(bst.root, 7);
bst.root = bst.add(bst.root, 5);
bst.root = bst.add(bst.root, 9);
bst.root = bst.add(bst.root, 3);
bst.root = bst.add(bst.root, 6);
bst.root = bst.add(bst.root, 8);
bst.root = bst.add(bst.root, 10);
bst.root = bst.add(bst.root, 2);

// traversal
console.log('\n######### Traversals ########');

console.log('inorder: \n');
BST.inorderTraversal(bst.root);
console.log('preorder: \n');
BST.preorderTraversal(bst.root);
console.log('postorder: \n');
BST.postOrderTraversal(bst.root);

// search
console.log('\n######### Search ########');

console.log(`8 is in BST: ${BST.find(bst.root, 8) !== null}`)
console.log(`18 is in BST: ${BST.find(bst.root, 18) !== null}`)

// delete
console.log('\n############### Delete #####################')
// bst.delete(bst.root, 10);
bst.delete(bst.root, 7);
BST.preorderTraversal(bst.root);