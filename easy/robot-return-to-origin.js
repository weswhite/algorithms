//https://leetcode.com/problems/robot-return-to-origin/

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    const target = [0,0]
    let position = [0,0]
    
    squence = moves.split("")
    squence.forEach(s => {
        switch (s) {
            case 'U':
                position = [position[0], position[1] + 1]
                break
            case 'D':
                position = [position[0], position[1] - 1]
                break
            case 'L':
                position = [position[0] - 1, position[1]]
                break
            case 'R':
                position = [position[0] + 1, position[1]]
                break
        }
        
    })
    if (position[0] === target[0] && position[1] === target[1]){ 
        return true
    } else {
        return false
    }
    
};