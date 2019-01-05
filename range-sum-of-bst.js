//https://leetcode.com/problems/range-sum-of-bst/
//168ms, faster than 98%

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    let sum = 0    
    
    const traverse = (node, l, r) => {
        if(node){
            if(node.val >= l && node.val <= r){
                sum+=node.val                
            }
            traverse(node.right, l, r)
            traverse(node.left, l, r)
        }
        
    }
    
    traverse(root, L, R)
    return sum
};