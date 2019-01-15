//https://leetcode.com/problems/k-closest-points-to-origin/

const distance = (arr) => {
    return Math.sqrt(Math.pow(0 - arr[0], 2) + Math.pow(0 - arr[1], 2))
}

const kClosest = (points, K) => {
    const distancePoints = points.map(p => distance(p))
    const copy = [...distancePoints].sort((a, b) => a - b)
    let result = []
    for(i = 0; i < K; i++){
        result.push( points.indexOf(copy[i]) )
    }
    return result
};