/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var isSymmetric = function(root) {
  if (root === null) {
    return true;
  }
  function isSym(r1, r2) {
    if (r1 === null && r2 === null) {
      return true;
    }
    if (!r1 || !r2 || r1.val !== r2.val) {
      return false;
    }
    return isSym(r1.left, r2.right) && isSym(r1.right, r2.left);
  }
  return isSym(root.left, root.right);
};
// @lc code=end
