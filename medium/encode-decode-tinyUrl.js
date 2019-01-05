//https://leetcode.com/problems/encode-and-decode-tinyurl/

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */

hashTable = [];
var encode = function(longUrl) {
    hashTable.push(longUrl);
    return 'http://tinyurl.com/' + hashTable.indexOf(longUrl); 
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    const index = shortUrl.substring(19);
    return hashTable[index];    
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */