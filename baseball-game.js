//https://leetcode.com/problems/baseball-game
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    const ref = []
    ops.forEach((v, i) => {
        
        if(v == "+") {
            const points = ref[ref.length - 2] + ref[ref.length - 1]
            ref.push(points)
        }
        else if(v == "D"){
            const points2 = ref[ref.length - 1] * 2
            ref.push(points2)
        }
        else if(v == "C"){
            ref.pop()
        }
        else {
            ref.push(parseInt(v))
        }
    })
    return ref.reduce((a, v) => a + v )
};
