//https://leetcode.com/problems/jewels-and-stones/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var splitJ = J.split("");
    var splitS = S.split("");
    var match = splitJ.map(j => {
        return splitS.filter(s => {
            if (s === j) {
                return true;
            }
        })
    })     
    return [].concat(...match).length
};