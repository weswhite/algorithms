//https://leetcode.com/problems/reshape-the-matrix

/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    const flat = [].concat(...nums)
    const length = flat.length
    let result = []
    if(r * c != length) return nums
    for(i = 0; i < r; i++){
        result[i] = new Array(c)
        for(j = 0; j < c; j++){
            result[i][j] = flat.shift()
        } 
    }
    return result
};
