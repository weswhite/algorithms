//https://leetcode.com/problems/toeplitz-matrix
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    for(i = 0; i < matrix.length; i++){
        for (j = 0; j < matrix[i].length; j++){
            if(matrix[i + 1] !== undefined && matrix[i + 1][j + 1] !== undefined){
                if(matrix[i][j] !== matrix[i + 1][j + 1]){
                    return false
                }
            }
        }
    }
    return true
};
