//https://leetcode.com/problems/distribute-candies
/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    const max = candies.length/2
    const hash = []
    for(i = 0 ; i < candies.length; i++){
        if(hash.indexOf(candies[i]) == -1) hash.push(candies[i])        
    }
    return (hash.length > max) ? max : hash.length
};
