//https://leetcode.com/problems/sort-array-by-parity-ii

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let sorted = []
    const odd = A.filter(a => {
        if(a % 2 == 1) {
            return true
        } else {
            return false
        }
    }) 
    
    const even = A.filter(a => {
        if(a % 2 == 0) {
            return true
        } else {
            return false
        }
    }) 
    
    for(i = 0; i < A.length/2; i++){
        sorted.push(even[i])
        sorted.push(odd[i])
    }
    return sorted
};