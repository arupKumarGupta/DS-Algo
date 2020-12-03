import BST from './Bst.js';

const bst = new BST();
console.log('######### Insertions ########');
// insertion
bst.root = bst.add(bst.root,7);
bst.root = bst.add(bst.root,5);
bst.root = bst.add(bst.root,9);
bst.root = bst.add(bst.root,3);
bst.root = bst.add(bst.root,6);
bst.root = bst.add(bst.root,8);
bst.root = bst.add(bst.root,10);
bst.root = bst.add(bst.root,2);

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

console.log(`8 is in BST: ${BST.exists(bst.root, 8)}`)
console.log(`18 is in BST: ${BST.exists(bst.root, 18)}`)