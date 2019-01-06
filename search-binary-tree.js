//https://leetcode.com/problems/search-in-a-binary-search-tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

var searchBST = function(root, val) {
    return searchTree(root, val)
};

let searchTree = (root, val) =>{
    if(root==null) return null
    if(root.val==val) return root
    else if(root.val<val) {
        return searchTree(root.right,val)
    }
    else{
        return searchTree(root.left,val)
    }    
}