/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var map = new Map()
    var result = []
    nums = nums.sort((a,b) => a-b)
    for(i = 0; i < nums.length - 3; i++){
        for(l = i + 1; l < nums.length - 2; l++){
            var j = l+1
            var k = nums.length-1
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            }
            while(j < k){
                if(nums[i] + nums[j] + nums[k] + nums[l] === target){
                    result.push([nums[i], nums[l], nums[j], nums[k] ])
                    j++;
                    k--;
                    while (j < k && nums[j] == nums[j - 1]) {
                        j++;
                    }
                    while (j < k && nums[k] == nums[k + 1]) {
                        k--;
                    }
                } else if (nums[i] + nums[j] + nums[k] > target) {
                    k--;
                } else {
                    j++;
                }
            }
        }
    }
    return result    
};
