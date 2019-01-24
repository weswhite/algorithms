//https://leetcode.com/problems/number-complement/

/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    const binary = num.toString(2).split("")
    return parseInt(binary.map(b => (b == 0) ? 1 : 0 ).join(""), 2)
};

var findComplement = function(num) {
    return parseInt(num.toString(2).replace(/1/g,"t").replace(/0/g,"1").replace(/t/g,"0"),2);
};

function findComplement(num){
	var comp = 0;
	var b = 2;
	if (num === 0){
		return 1;
	}
	while (b <= num && num > 0){
		if (num%b === 0){
			comp += b/2;
		} else if (num === b){
			num -= b;
		} else {
			num -= b/2;
		}
		b *= 2;
	}
	return comp;
};
