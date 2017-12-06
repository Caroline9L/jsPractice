function findLongestWord(str) {
  var wordArr = str.split(' ');
  var maxLength = 0;
  
 for (var i = 0; i < wordArr.length; i++) {
   if (wordArr[i].length > maxLength) {
     maxLength = wordArr[i].length;
   }
 }
  return maxLength;
}

findLongestWord("The quick brown fox jumped over the lazy dog");