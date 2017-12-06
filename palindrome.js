function palindrome(str) {
  var word = str.replace(/[\W_]/g,'').toLowerCase();
  var pal = str.replace(/[\W_]/g,'').split('').reverse().join().toString().split(",").join("").toLowerCase();
  if (word === pal) {
    return true;
  } else {
    return false;
  }

}



palindrome("eye");