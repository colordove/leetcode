/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (25.17%)
 * Total Accepted:    650.7K
 * Total Submissions: 2.6M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 123
 * Output: 321
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -123
 * Output: -321
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 120
 * Output: 21
 * 
 * 
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose
 * of this problem, assume that your function returns 0 when the reversed
 * integer overflows.
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const xAry = [];
    const symbol = x >= 0 ? '' : '-';
    for(let i = 0; i < Math.abs(x).toString().length; i++) {
        xAry.push(Math.abs(x).toString().charAt(i));
    }
    const num = parseInt(symbol + xAry.reverse().join(',').replace(/,/g, ''));
    return isOverflow(num) ? 0 : num;
};

function isOverflow(num) {
    if (num > -Math.pow(2, 31) && num < Math.pow(2, 31) - 1) {
        return false;
    }
    return true;
}
