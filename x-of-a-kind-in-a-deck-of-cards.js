//https://leetcode.com/problems/x-of-a-kind-in-a-deck-of-cards
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    if (deck.length < 2) return false    
    const map = new Map()
    for(i = 0; i < deck.length; i++) {
        if(map.has(deck[i])) {
            map.set(deck[i], map.get(deck[i]) + 1)
        } else map.set(deck[i], 1)
    }
    const arr = [...map.values()]
    const minCount = Math.min(...arr)
    for(X = 2; X <= minCount; X++){
        let hash = []
        for(i = 0; i < arr.length; i ++) {
            if(arr[i] % X == 0){
               hash.push(true)
            }
        }
        if(hash.length == arr.length) return true
    }
    return false
};
