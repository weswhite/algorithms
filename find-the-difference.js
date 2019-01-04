//https://leetcode.com/problems/find-the-difference/

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let sValues = s.split("")
    let tValues = t.split("")
    
    return tValues.filter( v => {
        if(sValues.indexOf(v) === -1){
            return true
        } else {
            sValues.splice(sValues.indexOf(v), 1)
            return false
        }
    })[0]
};