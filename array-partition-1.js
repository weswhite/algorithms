//https://leetcode.com/problems/array-partition-i
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let a = []
    let b = []
    let sorted = nums.sort((a,b) => a-b)
    for (i = 0; i < nums.length; i+=2){
        a.push(sorted[i])
        b.push(sorted[i+1])
    }
    return a.reduce((acc, value, i) => {
        return acc + Math.min(a[i], b[i])
    })
    
};