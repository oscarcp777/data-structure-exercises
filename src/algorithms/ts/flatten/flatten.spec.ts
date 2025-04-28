import { flatten, flattenIter } from "./flatten";

describe('array flatten with recursive method', () => {
    it('check flatten data array', () => {
      expect(flatten([[1,2,[3]],[[[[4]],[6]],[[7]]],8])).toEqual([1,2,3,4,6,7,8]);
      expect(flatten([[1,2,[3]],4])).toEqual([1,2,3,4]);
      
    });
  });

describe('array flatten with iteration', () => {
    it('check flatten data array', () => {
      expect(flattenIter([[1,2,[3]],[[[[4]],[6]],[[7]]],8])).toEqual([1,2,3,4,6,7,8]);
      expect(flattenIter([[1,2,[3]],4])).toEqual([1,2,3,4]);
      
    });
  });