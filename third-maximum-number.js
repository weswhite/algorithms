//https://leetcode.com/problems/third-maximum-number
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((a, b) => a - b)
    const spread = [...new Set(nums)]
    if(spread.length < 3) return Math.max(...spread)
    return spread[spread.length - 3]
};
