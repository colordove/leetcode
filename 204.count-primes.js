/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 *
 * https://leetcode.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (28.32%)
 * Total Accepted:    226.5K
 * Total Submissions: 790.1K
 * Testcase Example:  '10'
 *
 * Count the number of prime numbers less than a non-negative number, n.
 * 
 * Example:
 * 
 * 
 * Input: 10
 * Output: 4
 * Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let num = 0;
    for(let i = 0; i < n; i++) {
        if (isPrime(i)) {
            num++;
        }
    }
    return num;
};

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num === 2 || num === 3) {
        return true;
    }
    if (num % 2 === 0) {
        return false;
    }
    for(let i = 3; i <= parseInt(Math.sqrt(num)); i += 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
