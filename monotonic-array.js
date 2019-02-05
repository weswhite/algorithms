//https://leetcode.com/problems/monotonic-array
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    if(A.length <= 1) return true    
    if(A[0] > A[A.length - 1] ) {
        return A.every((a, i, arr) => (arr.length-1 != i) ? a >= arr[i + 1] : a <= arr[i - 1])
    } else if(A[0] < A[A.length - 1]){
        return A.every((a, i, arr) => (arr.length-1 != i) ? a <= arr[i + 1] : a >= arr[i - 1])
    } else if(A[0] == A[A.length - 1]){
        return A.every((a, i, arr) => a == arr[0])
    }
};
