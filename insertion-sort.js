function insertion_sort(array) {
    for(var i = 1, j; i < array.length; i++) {
      var temp = array[i];
      for(j = i - 1; j >= 0 && array[j] > temp; j--) {
        array[j+1] = array[j];
      }
      array[j+1] = temp;
    }
    
    return array;
  }

const data = [5,4,8,3,9,14,73,89,31,7]
const result = insertion_sort(data);
console.log(result)
