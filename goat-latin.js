//https://leetcode.com/problems/goat-latin
/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    const arr = S.split(' ')
    let result = []
    for(i = 0; i < arr.length; i++){
        const f = arr[i][0].toLowerCase()
        let newWord = []
        if(f !== 'a' && f !== 'e' && f !== 'i' && f !== 'o' && f !== 'u'){
            let letters = arr[i].split('')
            const first  = letters.shift()
            letters.push(first)
            newWord = letters.join('')
        } else newWord = arr[i]
        newWord += "ma"
        for(j = 0; j < i + 1; j++){
            newWord += 'a'
        }
        result.push(newWord)
    }
    return result.join(' ')
};
