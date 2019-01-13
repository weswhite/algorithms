//https://leetcode.com/problems/unique-email-addresses

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  
    let stack = []
   
    for(const o of emails){
       
        let domain = o.substring(o.indexOf("@"),o.length)       
        let withOutPlus = o.slice(0, o.indexOf("+"))       
        let removeDot = withOutPlus.replace(/\./g, "")       
        const final = removeDot.concat(domain)
        
        if(!stack.includes(final)){
            stack.push(final)
        }
    }
    return stack.length
};
