//https://leetcode.com/problems/ugly-number/
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    while(num % 2 === 0 && num !== 0){
        num = num /2
    }
    while(num % 3 === 0 && num !== 0){
        num = num /3
    }
    while(num % 5 === 0 && num !== 0){
        num = num /5
    }
    if(num === 1) return true
    else return false
};
