//https://leetcode.com/problems/hamming-distance

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    const xb = x.toString(2)
    const yb = y.toString(2)
    const xbb = "0000000000000000000000000000000000".substr(xb.length) + xb
    const ybb = "0000000000000000000000000000000000".substr(yb.length) + yb
    let distance = 0
    
    for (i = 0; i < xbb.length; i++) {
        if(xbb[i] != ybb[i]){
            distance += 1
        }
    }
    return distance
};
