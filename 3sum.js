//https://leetcode.com/problems/3sum
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 
 //exeeds runtime limit
var threeSum = function(nums) {
    var map = new Map()
    var result = []
    nums = nums.sort((a,b) => a-b)
    for(i = 0; i < nums.length; i++){
        for(j = 0; j < nums.length - 1; j++){
            for(k = 0; k < nums.length - 2; k++){
                if(i === j || i === k || j === k ) break
                if(nums[i] + nums[j] + nums[k] === 0){
                    const arr = [nums[i],nums[j],nums[k]].sort((a,b) => a - b)
                    const str = arr.join('')
                    if(!map.has(str)){
                        map.set(str, 1)
                        result.push(arr)
                    }
                }
            }
        }  
    }
    return result
};
//fix and sweep
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var map = new Map()
    var result = []
    nums = nums.sort((a,b) => a-b)
    for(var i = 0; i < nums.length - 2; i++){
        var j = i+1
        var k = nums.length-1
        if (i > 0 && nums[i] == nums[i - 1]) {
           continue;
        }
        while(j < k){
            if(nums[i] + nums[j] + nums[k] === 0){
                result.push([nums[i], nums[j], nums[k]])
                j++;
                k--;
                while (j < k && nums[j] == nums[j - 1]) {
                 j++;
                }
                while (j < k && nums[k] == nums[k + 1]) {
                 k--;
                }
             } else if (nums[i] + nums[j] + nums[k] > 0) {
                k--;
             } else {
                j++;
             }
         }
    }
    return result
};
