//Remove all falsy values from an array.

function bouncer(arr) {
  arr = arr.filter(Boolean);
  
  return arr;
}

bouncer([7, "ate", "", false, 9]);