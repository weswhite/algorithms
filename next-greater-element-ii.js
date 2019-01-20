https://leetcode.com/problems/next-greater-element-ii

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const middle = Math.max(...nums)
    const index = nums.indexOf(middle)
    return nums.map((n, i) => {
        if(i == index || n == middle) return -1
        else if( i < index && n > 0) return nums.find((m, j) => n < m && j > i)
        else if( i > index && n > 0) return nums.find((m, j) => m > n)
        else if( i > index && n < 0 )return nums.find((m, j) => n < m )
        else if( i < index && n < 0 )return nums.find((m, j) => n < m )
        else return nums.find((m, j) => n < m && j > i)
    })
};
//failing test cases
//[-2,1,-3,4,-1,2,1,-5,4]
//[100,1,11,1,120,111,123,1,-1,-100]