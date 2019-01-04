//https://leetcode.com/problems/unique-morse-code-words/

/**
 * @param {string[]} words
 * @return {number}
 */

let morseValues = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

let getIndex = function(char) {
    return char.charCodeAt(0)-97
}

let getMorseValue = function(word) {
    return word.split("")
        .map(s => morseValues[getIndex(s)])
        .join("");
}

let uniqueMorseRepresentations = function(words) {
    const morseArray = words.map(w => getMorseValue(w))
    return new Set(morseArray).size
};