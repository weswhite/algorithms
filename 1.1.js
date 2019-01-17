const isUnique = (str) => {
    if(str.length > 128) return false
    const splitStr = str.split("")
    const hash = new Set(splitStr)
    console.log(hash.length, splitStr.length)
    if(hash.length === splitStr.length) return true
    else return false
}