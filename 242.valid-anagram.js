/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 *
 * https://leetcode.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (51.06%)
 * Total Accepted:    321K
 * Total Submissions: 622.6K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * Given two strings s and t , write a function to determine if t is an anagram
 * of s.
 * 
 * Example 1:
 * 
 * 
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "rat", t = "car"
 * Output: false
 * 
 * 
 * Note:
 * You may assume the string contains only lowercase alphabets.
 * 
 * Follow up:
 * What if the inputs contain unicode characters? How would you adapt your
 * solution to such case?
 * 
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let sMap = new Map();
    let tMap = new Map();
    sMap = recordLetterTimes(s);
    tMap = recordLetterTimes(t);
    
    const tHass = hasLetter(sMap, tMap, t, 't');
    const sHast = hasLetter(sMap, tMap, s, 's');

    if (tHass && sHast) {
        return true;
    }
    return false;
};

function recordLetterTimes(string) {
    const map = new Map();
    for(let i = 0; i < string.length; i++) {
        const letter = string.charAt(i);
        if (map.has(letter)) {
            map.set(letter, map.get(letter) + 1);
        } else {
            map.set(letter, 1);
        }
    }
    return map;
}

function hasLetter(sMap, tMap, string, type) {
    for(let i = 0; i < string.length; i++) {
        const str = string.charAt(i);
        const map = type === 's' ? tMap : sMap;
        if (!map.has(str)) {
            return false;
        }
        if (tMap.get(str) !== sMap.get(str)) {
            return false;
        }
    }
    return true
}

