/**
 * algorithms fibonacci recursive 
 * F(n) = F(n+1) + F(n+2)
 * On solving the above recursive equation 
 * we get the upper bound of Fibonacci as
 * 
 * Time Complexity: O(2^n)
 * Extra Space: O(n)
 * @param {*} n 
 */
export const fibonacci = (n) => {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
/**
 * algorithms fibonacci iterative 
 * Time Complexity: O(n)
 * Extra Space: O(1)
 * @param {*} n 
 */
export const fibonacciIter = (n) => {
    let first = 0;
    let second = 1;
    let acc = 1;
    for (let index = 0; index < n; index++) {
        acc = first + second;
        first = second;
        second = acc;
    }
    return first
}
/**
 * algorithms fibonacci with dinamic programation
 * Time Complexity: O(n)
 * Extra Space: O(n) 
 * @param {*} n 
 */
export const fibonacciMemoization = (n) => {

    const buffer = [];
    buffer[0] = 0;
    buffer[1] = 1;
    buffer[2] = 1;
    for (let index = 3; index <= n; index++) {
        buffer[index] = buffer[index - 1] + buffer[index - 2];
    }
    return buffer[n]
}
/**
 * Fibonacci Number in O(Log n) time.
 * Below is one more interesting recurrence formula that can be used 
 * to find n’th Fibonacci Number in O(Log n) time.
 * If n is even then k = n/2:
 * F(n) = [2*F(k-1) + F(k)]*F(k)
 * If n is odd then k = (n + 1)/2
 * F(n) = F(k)*F(k) + F(k-1)*F(k-1)
 * 
 * How does this formula work?
 * The formula can be derived from above matrix equation.
 * | 1 1 |   = | Fn+1  Fn   |
 * | 1 0 |     | Fn    Fn-1 |
 * Taking determinant on both sides, we get
 * (-1)n = Fn+1.Fn-1 – Fn^2
 * 
 * Moreover, since AnAm = A^n+m for any square matrix A, 
 * the following identities can be derived (they are obtained 
 * form two different coefficients of the matrix product)
 * 
 * FmFn + Fm-1Fn-1 = Fm+n-1
 * By putting n = n+1,
 * FmFn+1 + Fm-1Fn = Fm+n
 * Putting m = n
 * F2n-1 = Fn^2 + Fn-1^2
 * F2n = (Fn-1 + Fn+1)Fn = (2Fn-1 + Fn)Fn (Source: Wiki)
 * To get the formula to be proved, we simply need to do following
 * If n is even, we can put k = n/2
 * If n is odd, we can put k = (n+1)/2
 * 
 * Time Complexity: Log(n)
 * Extra Space: Log(n)
 * @param {*} n 
 */
// table f[] 
const f = [];
export const fib = (n) => {
    // Base cases
    if (n === 0)
        return 0;
    if (n === 1 || n === 2)
        return (f[n] = 1);
    // If fib(n) is already computed
    if (f[n])
        return f[n];
    let k = ((n & 1) === 1) ? (n + 1) / 2 : n / 2;
    // Applyting above formula [Note value n&1 is 1 if n is odd, else 0.
    f[n] = ((n & 1) === 1) 
                ? (fib(k) * fib(k) + fib(k - 1) * fib(k - 1))
                : (2 * fib(k - 1) + fib(k)) * fib(k);
    return f[n];
}
