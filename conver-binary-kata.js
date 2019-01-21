//https://www.codewars.com/kata/551f37452ff852b7bd000139/train/javascript

function addBinary(a,b) {
  return (a + b >= 0) ? (a + b).toString(2) : ((a + b) >>> 0).toString(2);
}
