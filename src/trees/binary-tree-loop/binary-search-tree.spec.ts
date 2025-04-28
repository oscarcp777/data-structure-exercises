
import BinaryTree from './binary-tree'
// unit tests
// do not modify the below code
describe('Binary Search Tree', function() {
  it('creates a correct tree', () => {
    const nums = [3,7,4,6,5,1,10,2,9,8];
    const tree = new BinaryTree();
    nums.map( num => tree.add(num));
    const objs = tree.toObject();
    expect(objs.value).toEqual(3);
    
    expect(objs.left.value).toEqual(1);
    expect(objs.left.left).toBeNull();
    
    expect(objs.left.right.value).toEqual(2);
    expect(objs.left.right.left).toBeNull();
    expect(objs.left.right.right).toBeNull();
    
    expect(objs.right.value).toEqual(7);
    
    expect(objs.right.left.value).toEqual(4);
    expect(objs.right.left.left).toBeNull();
    
    expect(objs.right.left.right.value).toEqual(6);
    expect(objs.right.left.right.left.value).toEqual(5);
    expect(objs.right.left.right.left.right).toBeNull();
    expect(objs.right.left.right.left.left).toBeNull();
    
    expect(objs.right.right.value).toEqual(10);
    expect(objs.right.right.right).toBeNull();
    
    expect(objs.right.right.left.value).toEqual(9);
    expect(objs.right.right.left.right).toBeNull();
    
    expect(objs.right.right.left.left.value).toEqual(8);
    expect(objs.right.right.left.left.right).toBeNull();
    expect(objs.right.right.left.left.left).toBeNull();
  });
});
describe('get height of BST', () => {
  it('should obtain the height of the BST', () => {
    const tree = new BinaryTree();
    expect(tree.getHeight()).toEqual(0);
    [3,7,4].map( num => tree.add(num));
    expect(tree.getHeight()).toEqual(3);
    [6,5,1].map( num => tree.add(num));
    expect(tree.getHeight()).toEqual(5);
    [10,2,9,8].map( num => tree.add(num));
    expect(tree.getHeight()).toEqual(5);
    tree.traverseLineByLine()
  });
});

describe('Find sum of all left leaves', () => {
  it('should return sum of all left leaves', () => {
    const nums = [3,7,4,6,5,1,10,2,9,8];
    const tree = new BinaryTree();
    nums.map( num => tree.add(num));
    expect(tree.getSumOfAllLeftLeaves()).toEqual(13);
  });
});