// https://leetcode.com/problems/fibonacci-number/

function fib(n: number): number {
    if(n === 1 || n === 0) return n;
    return fib(n-1) + fib(n-2);
};