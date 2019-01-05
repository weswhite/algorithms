//https://leetcode.com/problems/flipping-an-image/submissions/

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    return A.map(a => a.reverse().map(a => 1^a))
};