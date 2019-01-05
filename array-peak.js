//https://leetcode.com/problems/peak-index-in-a-mountain-array/

/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    return A.indexOf(Math.max(...A))
};