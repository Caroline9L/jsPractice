
function mutation(arr) {
  var arr0 = arr[0].toLowerCase(); 
  var arr1 = arr[1].toLowerCase(); 

  for (var i = 0; i < arr1.length; i++) {
    if (arr0.indexOf(arr1[i]) === -1) {
        return false;
      } 
  }
  return true;

}

mutation(["hello", "hey"]);
