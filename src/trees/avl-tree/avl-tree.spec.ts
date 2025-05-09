import AVLTree from './avl-tree';

describe('AVL Tree', function() {
    it('creates a correct tree', () => {
      const nums = [3,7,4,6,5,1,10,2,9,8];
      const tree = new AVLTree();
      nums.map( num => tree.add(num));
      const objs = tree.toObject();
  
      expect(objs.value).toEqual(4);
      
      expect(objs.left.value).toEqual(2);
      
      expect(objs.left.left.value).toEqual(1);
      expect(objs.left.left.left).toBeNull();
      expect(objs.left.left.right).toBeNull();
      
      expect(objs.left.right.value).toEqual(3);
      expect(objs.left.right.left).toBeNull();
      expect(objs.left.right.right).toBeNull();
      
      expect(objs.right.value).toEqual(7);
      
      expect(objs.right.left.value).toEqual(6);
      expect(objs.right.left.right).toBeNull();
      
      expect(objs.right.left.left.value).toEqual(5);
      expect(objs.right.left.left.left).toBeNull();
      expect(objs.right.left.left.right).toBeNull();
      
      expect(objs.right.right.value).toEqual(9);
      
      expect(objs.right.right.left.value).toEqual(8);
      expect(objs.right.right.left.left).toBeNull();
      expect(objs.right.right.left.right).toBeNull();
      
      expect(objs.right.right.right.value).toEqual(10);
      expect(objs.right.right.right.left).toBeNull();
      expect(objs.right.right.right.right).toBeNull();
    });
  });