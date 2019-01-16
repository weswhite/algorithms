//https://leetcode.com/problems/uncommon-words-from-two-sentences
/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    const splitA = A.split(" ")
    const splitB = B.split(" ")   
    const merged = splitA.concat(splitB)
    const hash = []
    const removed = []
    merged.forEach(m => {
        const index = hash.indexOf(m)
        if(removed.indexOf(m) === -1){
            if(index === -1){
                hash.push(m)
            } else {
                hash.splice(index, 1)
                removed.push(m)
            }
        }        
    })
    return hash
};
