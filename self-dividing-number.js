//https://leetcode.com/problems/self-dividing-numbers/

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const selfDividing = []
    for(i=left; i <= right; i++){
        const split = i.toString().split("")
        const self = split.filter(s => {
            if(i % parseInt(s) == 0){
               return true
            } else {
                return false
            }
        })
        console.log(self)
        if(self.length == split.length){
            selfDividing.push(self.join(""));
        }
    }
    return selfDividing
};