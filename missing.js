
function fearNotLetter(str) {
	var alph = "abcdefghijklmnopqrstuvwxyz";
	var stringLength = str.length;
	var testCode = alph.slice(0, stringLength);
	var missing = [];

	if (str.charAt(0) === "a") {
		for (var i = 0; i < testCode.length; i++) {
			if (str.indexOf(testCode[i]) === -1) {
				missing.push(testCode[i]);
				str = missing[0];
				return str;
			} else if (str.charAt(0) !== "a") {
				str = "undefined";
				return str;
			}

		}
	}

}

fearNotLetter("abce");