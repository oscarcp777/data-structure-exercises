import {
    fibonacci,
    fibonacciIter,
    fibonacciMemoization,
    fib
} from "./fibonacci";

const checkFibonacci = (fibonacci) =>{
    expect(fibonacci(0)).toEqual(0);
    expect(fibonacci(1)).toEqual(1);
    expect(fibonacci(2)).toEqual(1);
    expect(fibonacci(3)).toEqual(2);
    expect(fibonacci(4)).toEqual(3);
    expect(fibonacci(5)).toEqual(5);
    expect(fibonacci(6)).toEqual(8);
    expect(fibonacci(7)).toEqual(13);
    expect(fibonacci(19)).toEqual(4181);
    expect(fibonacci(20)).toEqual(6765);
    expect(fibonacci(21)).toEqual(10946);
}
describe('fibonacci sequence with recursive method (naive algorithm)', () => {
    it('check fibonacci sequence with recursive', () => {
        checkFibonacci(fibonacci);
    });
});

describe('fibonacci sequence with dinamic programation', () => {
    it('check fibonacci sequence with memoization', () => {
        checkFibonacci(fibonacciIter);
    });
});
describe('fibonacci sequence with iterative method', () => {
    it('check fibonacci sequence with iteration', () => {
        checkFibonacci(fibonacciMemoization);
    });
});
describe('fibonacci sequence with Matrix and Log(n)', () => {
    it('check fibonacci sequence with matrix', () => {
        checkFibonacci(fib);
    });
});