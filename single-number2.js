/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var hash = {}
    nums.forEach(n => {
        if(!hash[n]){
            hash[n] = 1
        } else {
            hash[n] += 1
        }
    })
    var keys = Object.keys(hash)
    var values = Object.values(hash)
    var index = values.indexOf(1)
    return keys[index]
};
