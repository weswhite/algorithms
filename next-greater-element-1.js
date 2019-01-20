//https://leetcode.com/problems/next-greater-element-i

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {    
    return nums1.map((n) => nums2.slice(nums2.indexOf(n)).find(i => i > n) || -1);
    
};