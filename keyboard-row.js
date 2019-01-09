//https://leetcode.com/problems/keyboard-row/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let top = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
    let mid = ["a", "s", "d", "f", "g", "h", "j", "k", "l"]
    let bot = ["z", "x", "c", "v", "b", "n", "m" ]
    
    return words.filter(w => {
        let split = w.split("").map(w => w.toLowerCase())
        console.log(split)
        if (top.indexOf(split[0]) !== -1){
            let filtered = split.filter( s =>{
                if(top.indexOf(s) == -1) return false
                else return true
            })
            if(filtered.length == split.length) return true
            else return false
        } else if (mid.indexOf(split[0].toLowerCase()) !== -1){
            let filtered = split.filter( s =>{
                if(mid.indexOf(s) == -1) return false
                else return true
            })
            if(filtered.length == split.length) return true
            else return false
        } else {
            let filtered = split.filter( s =>{
                if(bot.indexOf(s) == -1) return false
                else return true
            })
            if(filtered.length == split.length) return true
            else return false
        }
    })
};