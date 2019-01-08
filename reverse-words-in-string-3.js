//https://leetcode.com/problems/reverse-words-in-a-string-iii

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
    return s.split(" ").map(s => s.split("").reverse().join("")).join(" ")
};