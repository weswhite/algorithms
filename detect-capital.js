https://leetcode.com/problems/detect-capital
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    var copy = word
    var uppercase = word.toUpperCase()
    var lowercase = word.toLowerCase()
    var capitalize = copy.charAt(0).toUpperCase() + copy.toLowerCase().slice(1);
    if(uppercase === word) return true
    else if(lowercase === word) return true
    else if(capitalize === word) return true
    else return false
};
