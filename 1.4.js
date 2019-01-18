// const pal = (s1, s2) => {
//     const reverse1 = []
//     const ss = s1.split('')
//     for(i = 0; i < s1.length; i++){
//         reverse1.push(ss.pop())
//     }
//     if (reverse1.toString() == s2) return true
//     else return false
// }

const pal = (S) => {
    const ss1 = S.split("")
    const ss2 = [...ss1]
    if(S.length % 2 !== 0) return false
    const c1 = ss1.splice(0, S.length/2).join("")
    const c2 = ss2.splice(S.length/2, S.length/2).reverse().join("")
    if(c1 == c2) return true
}