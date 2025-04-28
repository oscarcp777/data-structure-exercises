import {findAllRectanglesInMatrix} from './find-all-rectangles'
describe('Find all rectangles filled with 0', () => {
    it('should return all rectangles in the matrix', () => {
        const input = [
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, 1],
            [1, 0, 1, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1],
            [1, 0, 1, 0, 0, 0, 1],
            [1, 1, 1, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1]
        ]
        expect(findAllRectanglesInMatrix(input))
        .toEqual([
            [2, 3, 3, 5], [3, 1, 5, 1], [5, 3, 6, 5]
          ])
        const matrix = [
            [1, 0, 1, 1, 1, 1, 1],
            [1, 1, 0, 1, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, 1],
            [1, 0, 1, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 1, 1],
            [1, 1, 1, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1],
            [1, 1, 0, 1, 1, 1, 0]
        ]
        expect(findAllRectanglesInMatrix(matrix))
        .toEqual([
            [0, 1, 0, 1], [1, 2, 1, 2], [2, 3, 3, 5], 
            [3, 1, 4, 1], [5, 3, 5, 6], [7, 2, 7, 2], 
            [7, 6, 7, 6]
          ])
    });
});