function binarySqrt(number) {
    var lo = 0, hi = number;
    while(lo <= hi) {
         var mid = Math.floor((lo + hi) / 2);
         if(mid * mid > number) hi = mid - 1;
         else lo = mid + 1;
    }
    return hi;
}
