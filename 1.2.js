const isPermutation = (str1, str2) => {
    if(str1.length !== str2.length) return false
    ss1 = str1.split("").sort().toString()
    ss2 = str2.split("").sort().toString()
    if(ss1 == ss2) return true
    else return false
}