import {isPrime} from './primes';

describe('prime numbers', function() {
  it('check prime numbers', () => {
    expect(isPrime(1)).toBeTruthy();
    expect(isPrime(2)).toBeTruthy();
    expect(isPrime(3)).toBeTruthy();
    expect(isPrime(4)).toBeFalsy();
    expect(isPrime(5)).toBeTruthy();
    expect(isPrime(7)).toBeTruthy();
    expect(isPrime(11)).toBeTruthy();
    expect(isPrime(110)).toBeFalsy();
    expect(isPrime(113)).toBeTruthy();
  });
});