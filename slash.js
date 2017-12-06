
function slasher(arr, howMany) {
  if (howMany > arr.length) {
    return [];
  } else if (howMany == 0) {
    return arr;
  } else if (howMany < arr.length) {
    arr = arr.splice(howMany, arr.length-1);
    console.log(arr); 
    return arr; 
  }
}

slasher([1, 2, 3], 2);
