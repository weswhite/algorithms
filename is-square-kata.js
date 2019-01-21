//https://www.codewars.com/kata/youre-a-square/train/javascript

var isSquare = function(n){
  if(n < 0) return false
  if(Math.ceil(Math.sqrt(n)) === Math.sqrt(n)) return true
  else return false
}

function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}
