/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 *
 * https://leetcode.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (49.28%)
 * Total Accepted:    250K
 * Total Submissions: 503.7K
 * Testcase Example:  '"leetcode"'
 *
 * 
 * Given a string, find the first non-repeating character in it and return it's
 * index. If it doesn't exist, return -1.
 * 
 * Examples:
 * 
 * s = "leetcode"
 * return 0.
 * 
 * s = "loveleetcode",
 * return 2.
 * 
 * 
 * 
 * 
 * Note: You may assume the string contain only lowercase letters.
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = new Map();
    for(let i = 0; i < s.length; i++) {
        const str = s.charAt(i);
        if (map.has(str)) {
            map.set(str, map.get(str) + 1);
        } else {
            map.set(str, 1);
        }
    }
    for(let i = 0; i < s.length; i++) {
        const str = s.charAt(i);
        if (map.get(str) === 1) {
            return i;
        }
    }
    return -1;
};

