//https://leetcode.com/problems/single-number

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    hash = [];
    nums.forEach( n => {
        let repeatIndex = hash.indexOf(n)
        if(repeatIndex == -1) {
            hash.push(n)
        } else {
            hash.splice(repeatIndex, 1);
        }
    })
    return hash[0]
};