function factorialize(num) {
  var result = num;
  if (num === 0 || num === 1) {
    return 1;
  } 
  while (num > 1) {
      num--;
      result = result * num;
  }
  
  return result;
}

factorialize(5);
  //0! = 1
  //2! = 2x1=2
  //4! = 4x3x2x1=24