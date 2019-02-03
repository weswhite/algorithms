//https://leetcode.com/problems/reorder-log-files/
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    const num = []
    const alpha = []
    for(i = 0; i < logs.length; i++){
        const arr = logs[i].split(' ')
        if(parseInt(arr[1]) || parseInt(arr[1]) == 0){
            num.push(arr.join(' '))
        } else {
            alpha.push(logs[i])
        }        
    }
    alpha.sort(function(a, b) {
      let aWithoutId = a.substr(a.indexOf(' '), a.length);
      let bWithoutId = b.substr(b.indexOf(' '), b.length);

      return aWithoutId.localeCompare(bWithoutId);
    })
    return [...alpha, ...num]
};
