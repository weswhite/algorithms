//https://leetcode.com/problems/maximum-depth-of-binary-tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0
    return Math.max( 1 + maxDepth(root.right), 1 + maxDepth(root.left))
};

