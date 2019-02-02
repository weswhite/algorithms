//https://leetcode.com/problems/reverse-only-letters
/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    hash = []
    let chars = S.split('').filter((s, i) => {
        
        if(s.charCodeAt(0) < "A".charCodeAt(0) || s.charCodeAt(0) > "z".charCodeAt(0)){
            hash.push({[s]: i})
            return false
        } else if (s.charCodeAt(0) > "Z".charCodeAt(0) && s.charCodeAt(0) < "a".charCodeAt(0)){
            hash.push({[s]: i})
            return false
        } else 
            return true
    })
    chars.reverse()
    for(i = 0; i < hash.length; i++){
        var object = hash[i]
        var char = Object.keys(object)[0]
        var index = object[char]
        chars.splice(index, 0, char)
    }
    return chars.join('')
};
