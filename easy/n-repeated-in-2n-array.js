//https://leetcode.com/problems/n-repeated-element-in-size-2n-array/

/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    const numberOfN = A.length / 2;
    let counts = {}
    let n
    A.forEach(a => {
        if(!counts[a]){
            counts[a] = 1;
        } else {
            const value = parseInt(counts[a])
            counts[a] =  value + 1
            if(counts[a] == numberOfN){
                const values = Object.values(counts)
                const keys = Object.keys(counts);
                const index = values.indexOf(numberOfN);
                n = keys[index]
            }
        }        
    })
    if(n){
        return n        
    }
};