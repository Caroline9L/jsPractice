function allLongestStrings(inputArray) {
	var arr = [];

	if (inputArray.length == 1) {
		return inputArray;
	}

	var longest = inputArray.sort(function (a, b) {
		return b.length - a.length;
	});
	var lengthLongest = longest[0].length;

	for (var x = 0; x < longest.length; x++) {
		if (longest[x].length == lengthLongest) {
			arr.push(longest[x]);
		}
	}

	return arr;
}