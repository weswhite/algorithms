//fast, slow
//https://leetcode.com/problems/middle-of-the-linked-list/

var middleNode = function(head) {
    slow = fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};
