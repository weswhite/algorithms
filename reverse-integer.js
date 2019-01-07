//https://leetcode.com/problems/reverse-integer

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversed = x.toString().split("").reverse()
    let result
    let max = Math.pow(2, 31)
    console.log(max)
    if (reversed[reversed.length-1] == "-"){
        let sign = reversed.pop()
        reversed.unshift(sign)
        result = reversed.join("")
    } else {
        result = reversed.join("")
    }
    if(result >= max || (0-max) > result){
        return 0
    } else return result
};