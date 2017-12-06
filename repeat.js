
function repeatStringNumTimes(str, num) {
  if (num < 0) {
    return "";
  } else {
    str = str.repeat(num);
    console.log(str);
    return str;
  }
}

repeatStringNumTimes("abc", 3);