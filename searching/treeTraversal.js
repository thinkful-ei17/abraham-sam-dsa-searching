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

  function preOrder(tree, results=[]){
    results.push(tree.key);
    if(tree.left){
      preOrder(tree.left, results);
    }
    if(tree.right){
      preOrder(tree.right, results)
    }

    return results;
  }

  function postOrder(tree, results=[]){
    if(tree.left){
      postOrder(tree.left, results);
    }
    if(tree.right){
      postOrder(tree.right, results);
    }
    results.push(tree.key);

    return results;
  }

console.log(dataset);
console.log(inOrder(bst));
console.log(preOrder(bst));
console.log(postOrder(bst));

/*
                           25
                      /          \
                     15           50
                   /   \         /   \
                 10     24     35     70
                /  \   /  \    / \    / \
               4   12 18     31   44 66  90
                        \
                        22
*/