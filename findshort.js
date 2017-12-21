function findShort(str) {
	var words = str.split(' ');
	words = words.sort(function (a, b) {
		return b.length - a.length;
	});

	var shortestString = words.pop().length;
	return shortestString;
}