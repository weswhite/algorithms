//https://leetcode.com/problems/shortest-unsorted-continuous-subarray
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    var copy = [...nums]
    var sorted = nums.sort((a,b) => a - b)
    var position = []
    for(i = 0; i < nums.length; i++){
        if(sorted[i] != copy[i]){
            position.push(i + 1)
        }
    }
    return  position.length > 0 ? position[position.length - 1] - position[0] + 1 : 0
};
