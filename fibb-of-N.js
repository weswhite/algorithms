//https://leetcode.com/problems/fibonacci-number
/**
 * @param {number} N
 * @return {number}
 */
const fib = N => {
    return (N < 2) ? N : fib(N-2) + fib(N-1);
}