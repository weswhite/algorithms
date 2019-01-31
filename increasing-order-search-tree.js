//https://leetcode.com/problems/increasing-order-search-tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    var collection = []
    collectNodes(root, collection)
    result = new TreeNode(collection.pop())
    setNode(result, collection)
    return result
};

var collectNodes = function(root, array) {
    if(!root) return    
    collectNodes(root.right, array)
    array.push(root.val)
    collectNodes(root.left, array)
}

var setNode = function(node, array){
    if(array.length == 0) return
    node.right = new TreeNode(array.pop())
    if(array.length !== 0) setNode(node.right, array)    
    else return
}
