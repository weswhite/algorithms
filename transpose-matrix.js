//https://leetcode.com/problems/transpose-matrix
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    let result = []
    for(i = 0; i < A[0].length; i++){
        result[i] = []
    }
    for(a = 0; a < A.length; a++){
        
        for(b = 0; b < A[a].length; b++){
            console.log(A[a][b])
            result[b].push(A[a][b])
        }
    }
    return result
};