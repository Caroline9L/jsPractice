function largestOfFour(arr) {
  var maxLength = 0;
  longArr = [];
  
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {

      if (arr[i][j] > maxLength) {
        maxLength = arr[i][j];
       
      }
    }
     longArr.push(maxLength);
    maxLength = 0; //makes the return not in ascending order (leaves numbers in the order of the original arrays)
  }
  
  return longArr;
  //return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);