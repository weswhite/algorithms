//https://leetcode.com/problems/third-maximum-number
/**
 * @param {number[]} nums
 * @return {number}
 */
//O(nlogn)
var thirdMax = function(nums) {
    nums.sort((a, b) => a - b)
    const spread = [...new Set(nums)]
    if(spread.length < 3) return Math.max(...spread)
    return spread[spread.length - 3]
};

//O(n)
var thirdMax = function(nums) {
    let max1 = null
    let max2 = null
    let max3 = null
    for(i = 0; i < nums.length; i++){
        if(nums[i] === max3 || nums[i] === max2 || nums[i] === max1) continue
        if(nums[i] > max1 || max1 === null){
            max3 = max2
            max2 = max1
            max1 = nums[i]
        } else if( nums[i] > max2 || max2 === null){
            max3 = max2
            max2 = nums[i]
        } else if( nums[i] > max3 || max3 === null){
            max3 = nums[i]
        }
    }
    return (max3 === null) ? max1 : max3
};
