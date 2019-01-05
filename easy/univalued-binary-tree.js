//https://leetcode.com/problems/univalued-binary-tree/

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
var isUnivalTree = function(root) {
    
    var checkNode = function(node, match){
        if(node != null ){
            if (node.val != match){
                mismatches.push(node)
            } else {
                checkNode(node.left, match)
                checkNode(node.right, match)
            }
        }
    }
    
    let mismatches = []
    checkNode(root, root.val);
    if(mismatches.length > 0 ){
        return false
    } else {
        return true
    }    
};
