//https://leetcode.com/problems/two-sum

//O(N2)
var twoSum = function(nums, target) {
    var indecies = []
    for(i = 0; i < nums.length; i++){
        for(j = 0; j < nums.length; j++){
            if(i != j && indecies.length != 2){
                if(nums[i] + nums[j] == target){
                    indecies.push(i, j)
                }
            }
        }
    }
    return indecies
}

//O(N)
var twoSum = function(nums, target) {
    var indecies = [], hash = {}
    for(i = 0; i < nums.length; i++){
        var remainder = target - nums[i]
        if(hash[remainder] != undefined){
            indecies.push(i, hash[remainder])
        } else {
            hash[nums[i]] = i
        }
    }
    return indecies
};
