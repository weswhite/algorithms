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
