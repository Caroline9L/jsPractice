function spinalCase(str) {
	// "It's such a fine line between stupid, and clever."
	// --David St. Hubbins

	str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

	var newStr = str.replace(/\s+|_+/g, '-').toLowerCase();

	return newStr;

}

spinalCase('thisIsSpinalTap');