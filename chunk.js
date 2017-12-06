function chunkArrayInGroups(arr, size) {
  var newArr = [];
  var temp = [];
  
  for (var i = 0; i < arr.length; i++) {
    if (i % size !== size - 1) {
      temp.push(arr[i]);
    } else {
      temp.push(arr[i]);
      newArr.push(temp);
      temp = [];
    }
  }
  if (temp.length !== 0) {
    newArr.push(temp);
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);