//https://leetcode.com/problems/binary-gap

/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
    let binary = N.toString(2).split("")
    const gap = []
    const dif = []
    for(i = 0; i < binary.length; i++){        
        if (binary[i] == 1 ) {
            gap.push(i)
        }
    }
    for(i = 0; i < gap.length; i++){
        if(gap[i + 1]){
            dif.push(gap[i + 1] - gap[i])
        }
        
    }
    if(dif.length < 1) return 0
    return Math.max(...dif)
};
