//https://leetcode.com/problems/isomorphic-strings

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let hashS = {}, hashT = {}
    if(s.length !== t.length) return false
    for (i = 0; i < s.length; i++){
        //check the index, if it is not there, fill it with the opposite value
        //if it is there, check it against the opposite value
        //if it does not equal the opposite value, return false
        if(!hashS[s[i]]) hashS[s[i]] = t[i];
    	else if(hashS[s[i]] !== t[i]) return false;
        if(!hashT[t[i]]) hashT[t[i]] = s[i];
    	else if(hashT[t[i]] !== s[i]) return false;
    }
    //if you make it through the array with no negative, return true
    return true
};