
const LISLenght = (array) => {

    const lisSize = Array(array.length).fill(1)

    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[i] > array[j] && lisSize[i] < lisSize[j] + 1) {
                lisSize[i] = lisSize[j] + 1
            }
        }
    }

    return Math.max(...lisSize);
}
const LISList = (array) => {
    const lisList = Array(array.length).fill(1).map(()=>([]))

    lisList[0].push(array[0])

    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[i] > array[j] && lisList[i].length < lisList[j].length + 1) {
                lisList[i] = [].concat(lisList[j])
            }
        }
        lisList[i].push(array[i])
    }
   
    return lisList.reduce((previus, current) => 
                ( previus.length > current.length ? previus:current ))
}
/**
 * The Longest Increasing Subsequence (LIS) problem 
 * is to find the length of the longest subsequence 
 * of a given sequence such that all elements of 
 * the subsequence are sorted in increasing order. 
 * For example, the length of LIS for 
 * {10, 22, 9, 33, 21, 50, 41, 60, 80} is 6 
 * and LIS is {10, 22, 33, 50, 60, 80}.
 */
describe('Longest Increasing Subsequence', () => {
    it('should return the max size of the LIS', () => {
        expect(LISLenght([2,7,4,3,8])).toEqual(3)
        expect(LISLenght([10, 22, 9, 33, 21, 50, 41, 60, 80])).toEqual(6)
    });
    it('should return the list max of the LIS', () => {
        expect(LISList([2,7,4,3,8])).toEqual([2,3,8])
        expect(LISList([10, 22, 9, 33, 21, 50, 41, 60, 80])).toEqual([10,22,33,41,60,80])
    });
});