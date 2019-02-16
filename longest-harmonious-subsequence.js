//https://leetcode.com/problems/longest-harmonious-subsequence
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    var hash = new Map()
    for(i = 0; i < nums.length; i++){
        if(hash.has(nums[i])){
            hash.set(nums[i], hash.get(nums[i]) + 1)
        } else {
            hash.set(nums[i], 1)
        }
    }
    var arr = [...hash.entries()]
    var high = 0
    arr.sort((a, b) => a[0] - b[0])
    for(i = 0; i < arr.length - 1; i++){
        if(arr[i + 1][0] - arr[i][0] === 1 ){
            var harm = arr[i][1] + arr[i + 1][1]
            if(harm > high){
                high = harm
            }
        }
    }
    return high
};
//faster bottom half that greatly increased performance
var findLHS = function(nums) {
    var hash = new Map()
    for(i = 0; i < nums.length; i++){
        if(hash.has(nums[i])){
            hash.set(nums[i], hash.get(nums[i]) + 1)
        } else {
            hash.set(nums[i], 1)
        }
    }
    var high = 0
    for (var [key, value] of hash.entries()) {
      if(hash.has(key + 1)){
          var harmony = value + hash.get(key + 1)
          if(harmony > high) high = harmony
      }
    }
    return high
};
