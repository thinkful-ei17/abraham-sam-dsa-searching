/* eslint-disable */
class BST {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    // figure out if there is a root
    if (this.key === null) {
      // there is no tree
      // console.log('root: ', key);
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      // if this.key is less than
      // go left. Does this.left exist?
      if (this.left === null) {
        // console.log(`left of ${this.key}: ${key}`)
        this.left = new BST(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else if (key >= this.key) {
      if (this.right === null) {
        // console.log(`right of ${this.key}:  ${key}`)
        this.right = new BST(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }

  /**
   *      3
   *   2     5 
   */
  findMinimum(){
    if(this.left === null ){
      return this;
    } else {
    return this.left.findMinimum();
    }
  }

  _replaceWith(node){
    if(this.parent){
      if(this === this.parent.left){
        this.parent.left = node;
      } else if (this === this.parent.right){
        this.parent.right = node;
      }
      if(node){
        node.parent = this.parent;
      }
    } else {
      if(node){
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  remove(key){
    if(key === this.key){
      if(this.left && this.right){
        // find smallest number that is also bigger number
        const replacement = this.right.findMinimum();
        // hold position in tree to fill with new key
        // move values but save parent and children
        // we only change key and value of current thing we're on
        this.key = replacement.key;
        this.value = replacement.value;
        replacement.remove(replacement.key);
      }
      else if(this.left){
        this._replaceWith(this.left);
      } 
      else if (this.right){
        this._replaceWith(this.right);
      } else {
        this._replaceWith(null);
      } 
    } else if (key < this.key && this.left){
      this.left.remove(key);
    } else if (key > this.key && this.right){
      this.right.remove(key);
    } else {
      throw new Error('Key Error');
    }


  }
}

const bst = new BST();
// const word = 'EASYQUESTION';
// console.log(word.charCodeAt(0));

// for(let i = 0; i < word.length; i++){
//   bst.insert(word[i]);
// }
// bst.remove('Q');
// console.log('removed Q')
// console.log(bst);

const numbers = [3,1,4,6,9,2,5,7];
for (let i = 0; i < numbers.length; i++){
  bst.insert(numbers[i]);
}

// best.remove(3);

module.exports = BST;
