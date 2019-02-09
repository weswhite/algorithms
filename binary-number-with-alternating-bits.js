//https://leetcode.com/problems/binary-number-with-alternating-bits
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    var bits = n.toString(2)
    var arr = bits.split('')
    for(i = 0; i < arr.length - 1; i++){
        if(arr[i] == 0 && arr[i + 1] != 1) return false
        if(arr[i] == 1 && arr[i + 1] != 0) return false
    }
    return true
};
