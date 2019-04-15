/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (33.06%)
 * Total Accepted:    440.5K
 * Total Submissions: 1.3M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 * 
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * 
 * 
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * 
 * Note:
 * 
 * All given inputs are in lowercase letters a-z.
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length <= 0) {
        return "";
    }
    let num = 0;
    const len = getMinStrLen(strs);
    for(let i = 0; i < len; i++) {
        if (!prefixEqual(strs, i)) {
            num = i;
            if (i === 0) {
                return "";
            }
            break;
        } 
    }
    if (!num) {
        num = len;
    }
    if (num === 0) {
        return strs[0].slice(0, 1);
    }
    return strs[0].slice(0, num);
};

function prefixEqual(strs, num) {
    let prefix = strs[0].charAt(num);
    let isEqual = true;
    for(let i = 0; i < strs.length; i++) {
        if (strs[i].charAt(num) !== prefix) {
            isEqual = false;
        }
    }
    return isEqual;
}

function getMinStrLen(strs) {
    let len = 0;
    for(let i = 0; i < strs.length; i++) {
        if (strs[i].length > len) {
            len = strs[i].length;
        }
    }
    return len;
}
