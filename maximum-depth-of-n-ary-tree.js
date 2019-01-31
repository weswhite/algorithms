//https://leetcode.com/problems/maximum-depth-of-n-ary-tree
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    var counter = 0
    if(!root) return 0
    else if(!root.children) return 1 
    else{
        var result = 0
        var tallest = 0
        root.children.forEach(c => {            
            result = maxDepth(c)
            if(result > tallest) tallest = result                
        })
        return tallest + 1
    }
    
};
