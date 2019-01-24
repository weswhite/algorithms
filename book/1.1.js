const isUnique = (str) => {
    if(str.length > 128) return false
    const splitStr = str.split("")
    const hash = new Set(splitStr)
    if(hash.size === splitStr.length) return true
    else return false
}