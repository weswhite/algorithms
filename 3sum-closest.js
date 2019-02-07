//https://leetcode.com/problems/3sum-closest
//very brute force
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    var closest = null
    var sum = null
    nums.sort((a, b) => a - b)
    for(i = 0; i < nums.length - 2; i++){
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                sum = nums[i] + nums[j] + nums[k]
                var diff = Math.abs(sum - target)
                if(closest != null) {
                    if (Math.abs(closest - target) > diff) closest = sum
                } else closest = sum
            }
        }
    }
    return closest
};
