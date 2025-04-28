import {insertionSort, insertionSort2} from './insertion-sort';
describe('insertion sort', () => {
    it('should sort correctly', () => {
      const nums = insertionSort([10,5,3,8,2,6,4,7,9,1]);
      expect(nums).toEqual([1,2,3,4,5,6,7,8,9,10]);
    });
});
describe('insertion sort other version', () => {
  it('should sort correctly', () => {
    const nums = insertionSort2([10,5,3,8,2,6,4,7,9,1]);
    expect(nums).toEqual([1,2,3,4,5,6,7,8,9,10]);
  });
});