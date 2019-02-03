//https://leetcode.com/problems/reorder-log-files/
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    const hash = []
    for(i = 0; i < logs.length; i++){
        const arr = logs[i].split(' ')
        //console.log(arr)
        if(parseInt(arr[1])){
            hash.push(arr.join(' '))
            logs.splice(i, 1)
        }
    }
    //got bored and didnt want alphasort cause that is lame
    //alpha sort here and then contiue on
    for(i = 0; i < hash.length; i++){
        logs.push(hash[i])
    }
    return logs
};
