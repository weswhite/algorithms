
//https://leetcode.com/problems/container-with-most-water
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var max = 0
    for(i = 0; i < height.length; i++){
        for(j = height.length - 1; j > i ; j--){
            var area = Math.min(height[i], height[j]) * (j - i)
            if(area > max) max = area
        }
    }
    return max
};
