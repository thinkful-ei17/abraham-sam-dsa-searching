const BST = require('../bst');
const dataset = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];

const bst = new BST();

for(let i = 0; i < dataset.length; i++){
  bst.insert( dataset[i] );
}

function inOrder(tree, results=[]){
    // Left, then node, then right
    if(tree.left){
      inOrder(tree.left, results);
    }
    // only when something is a node do we insert
    results.push(tree.key);

    if(tree.right){
      inOrder(tree.right, results);
    }

    return results;
  }

  // preOrder(){}
  // postOrder(){}

console.log(inOrder(bst));
