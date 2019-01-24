const urlify = (str) => {
    return str.split(" ").filter(s => {
        if (s == "") return false
        else return true
    }).join("%20")
}