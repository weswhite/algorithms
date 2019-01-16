//WIP
//https://leetcode.com/problems/string-to-integer-atoi
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const splitStr = str.split(" ").filter(s => {
        if(s == "") return false
        else return true
    })
    console.log(splitStr)
    if(parseInt(splitStr[0])){
        //check bounds
        if(splitStr[0] > 2147483648) return 2147483648
        else if(splitStr[0] < -2147483648) return -2147483648
        else return splitStr[0]
        //if overflow retrun max
    } else return 0
};
