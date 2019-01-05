//https://leetcode.com/problems/di-string-match/

/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    const split = S.split("")
    let high = split.length
    let low = 0
    let result = []
    
    split.forEach((s,i) => {        
        if (s === "D") {
            result.push(high)
            high--
        } else if (s === "I") {
            result.push(low)
            low++
        }
    })
    result[split.length] = low
    
    return result
    
}; 