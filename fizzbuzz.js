//https://leetcode.com/problems/fizz-buzz
/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (num) => {
    let result = []
    for (n = 1; n <= num; n++){
        if(n%3===0 && n%5!==0){
            result.push("Fizz")
        }
        else if(n%3!==0 && n%5===0){
            result.push("Buzz")
        }
        else if(n%3===0 && n%5===0){
            result.push("FizzBuzz")
        }
        else result.push(n.toString())
    }
    return result
}