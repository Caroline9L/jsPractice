function checkPalindrome(str) {
	var str = str.toLowerCase();

	return str == str.split('').reverse().join('');

}