//https://leetcode.com/problems/island-perimeter
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let total = 0
    for(i = 0; i < grid.length; i++){
        for(j = 0; j < grid[i].length; j++){
            let count = 0
            if(grid[i][j] === 1){
                if(grid[i][j - 1] == undefined)count++
                else if(grid[i][j - 1] === 0)count++
                if(grid[i][j + 1] == undefined)count++
                else if(grid[i][j + 1] === 0)count++
                if(grid[i - 1] == undefined)count++
                else if(grid[i - 1][j] === 0)count++
                if(grid[i + 1] == undefined)count++
                else if(grid[i + 1][j] === 0)count++
                console.log(count)
            } else{
                count = 0
            }
            total += count
        }
    }
    return total
};