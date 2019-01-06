//https://leetcode.com/problems/subdomain-visit-count
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let hash = {}
    cpdomains.forEach(d => {
        let domain = d.split(" ")
        let count = domain[0]
        let domains = domain[1].split(".")
        let length = domains.length
        if(length == 3){
            uniqueDomains = [domains[0]+"."+domains[1]+"."+domains[2], domains[1]+"."+domains[2], domains[2]]
        } else if (length == 2) {
            uniqueDomains = [domains[0]+"."+domains[1], domains[1]]
        }else uniqueDomains = [d]
        console.log(uniqueDomains)
        uniqueDomains.forEach(s => {            
            if(hash.hasOwnProperty(s)){
                hash[s] =  parseInt(hash[s]) + parseInt(count)
            } else {
                hash[s] = count
            }
        })        
    })
    let result = []
    let keys = Object.keys(hash)
    let values = Object.values(hash)
    keys.forEach((k, i) => {
        result.push("" + values[i] + " " + k)
    })
    return result
};