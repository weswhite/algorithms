//https://leetcode.com/problems/find-the-difference/

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let sValues = s.split("")
    let tValues = t.split("")
    
    return tValues.filter( v => {
        index = sValues.indexOf(v) 
        if(index === -1){
            return true
        } else {
            sValues.splice(index, 1)
            return false
        }
    })[0]
};