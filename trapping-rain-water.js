//https://leetcode.com/problems/trapping-rain-water
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(height === null) return 0
    var ans = 0;
    var size = height.length
    var left = []
    var right = []
    left.push(height[0])
    for ( i = 1; i < size; i++) {
        left[i] = Math.max(height[i], left[i-1])
    }
    right[size - 1] = height[size - 1]
    for ( i = size - 2; i >= 0; i--) {
        right[i] = Math.max(height[i], right[i + 1])
    }
    for ( i = 1; i < size - 1; i++) {
        ans += Math.min(left[i], right[i]) - height[i]
    }
    return ans;
};
