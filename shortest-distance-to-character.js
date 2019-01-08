//https://leetcode.com/problems/shortest-distance-to-a-character

const shortestToChar = (S, C) => {
    let indeciesOfC = S.split("").map((s, i) => {if(s === C) return i}).filter(s => {if(s !== undefined) return true})
    return S.split("").map((s,i) => Math.abs(i - findClosestIndex(indeciesOfC, i)))
};

const findClosestIndex = (c, i) => {     
     let diff = c.map(c => Math.abs(c - i))
     let index = diff.indexOf(Math.min(...diff))
     return c[index]
}