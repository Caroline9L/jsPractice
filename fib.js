// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
function sumFibs(num) {


    var oldNum = 0;
    var newNum = 1;
    var result = 0;

    while (newNum <= num) {
      if (newNum % 2 !== 0) {
        result += newNum;
      }
        
      newNum += oldNum;
      oldNum = newNum - oldNum;
    } 
  
    return result;

}
sumFibs(10);
