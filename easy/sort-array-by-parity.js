//https://leetcode.com/problems/sort-array-by-parity/submissions/
//84ms
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let sorted = []
    A.forEach(a => {
        if(a%2 === 0){
            sorted.unshift(a)
        } else {
            sorted.push(a)
        }
    })
    return sorted
};