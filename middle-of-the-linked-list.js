//https://leetcode.com/problems/middle-of-the-linked-list/

var middleNode = function(head) {
    var count = 1
    var currentNode = head
    var half = 0
    while(currentNode.next){
        count ++
        currentNode = currentNode.next
    }
    if(count % 2 == 0) half = count / 2 + 1
    else half = Math.floor(count / 2) + 1
    currentNode = head
    for(i = 1; i < half; i++){
        currentNode = currentNode.next
    }
    return currentNode
};
