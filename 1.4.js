const pal = (s1, s2) => {
    const reverse1 = []
    const ss = s1.split('')
    for(i = 0; i < s1.length; i++){
        reverse1.push(ss.pop())
    }
    if (reverse1.toString() == s2) return true
    else return false
}