import {getMaximumPairwiseProduct} from './max.pairwise.product';

describe('should return the maximun of pairwise product ', function() {
  it('check getMaximumPairwiseProduct return correct results', () => {
    expect(getMaximumPairwiseProduct([1,2,3])).toEqual(6);
    expect(getMaximumPairwiseProduct([7,5,14, 2, 8, 8, 10, 1, 2, 3])).toEqual(140);
    expect(getMaximumPairwiseProduct([7,5,14, 2, 8, 8, 10, 1, 2, 3])).toEqual(140);
    expect(getMaximumPairwiseProduct([3,1,1, 2, 2, 3, 1, 1, 2, 3])).toEqual(9);
    expect(getMaximumPairwiseProduct([700,5,14, 2, 8, 8, 10, 1, 2, 300])).toEqual(210000);
    expect(getMaximumPairwiseProduct([4,4,4,4,4,4,4,4,4,4,4,4,4,4])).toEqual(16);
  });
});