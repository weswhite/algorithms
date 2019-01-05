//https://leetcode.com/problems/insert-into-a-binary-search-tree
//180ms, faster than 100%

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
var insertIntoBST = function(root, val) {
    return nodeCheck(root, val)
};

const nodeCheck = (node, value) => {
if(node.val > value){
    if(node.left != null){
        nodeCheck(node.left, value)
    } else {
        node.left = new TreeNode(value);            
    }
} else {
    if(node.right != null){
        nodeCheck(node.right, value)
    } else {
        node.right = new TreeNode(value);          
    }        
}
return node
}