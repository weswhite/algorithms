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

//someone elses solution i thought was interesting 
var findWords = function(words) {
    let keyboardMap = {
      'qwertyuiop': 0,
      'asdfghjkl': 1,
      'zxcvbnm': 2,
    }
  let output = []
  for (let i = 0; i < words.length; i++)  {
    let currentWord = words[i].split('')
    let result = currentWord.reduce((acc, elem) => {
      Object.keys(keyboardMap).forEach(key => {
        let exists = key.indexOf(elem.toLowerCase()) > -1
        if (exists) {
          acc[key] = true
        }
      })
      return acc
    }, {})
    if (Object.keys(result).length === 1) {
      output.push(currentWord.join(''))
    } 
  }
  return output
};

//also someone elses that used a Set because of the Set.has() 
var findWords = function(words) {
    // Define an array of Sets for each keyboard row.
    const kbRows = [
        new Set('qwertyuiop'.split('')),
        new Set('asdfghjkl'.split('')),
        new Set('zxcvbnm'.split(''))
    ];
    const ans = [];

    const checkWord = (word, row) => {
        // Ensure that each letter of the word is in the row we're given.
        for (let i = 0; i < word.length; ++i) {
            if (!row.has(word[i].toLowerCase())) {
                return false;
            }
        }
        ans.push(word);
    };
    
    words.forEach((word) => {
       // For each word check which row the first letter is in and send it to checking function.
        kbRows.forEach((row) => {
            if (row.has(word.charAt(0).toLowerCase())) checkWord(word, row); 
        });
    });
    
    return ans;
};