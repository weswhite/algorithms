//https://leetcode.com/problems/reverse-string

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    let arr = s.split("")
    let flipped = []
    for (i = 0; i < arr.length; i++){        
        flipped.unshift(arr[i])
    }
    return flipped.join("")
};