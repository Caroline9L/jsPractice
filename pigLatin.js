
function translatePigLatin(str) {

	var vowel = ["a", "e", "i", "o", "u"];

	var newStr = '';

	for (var i = 0; i < vowel.length; i++) {
		if (str.charAt() === vowel[i]) {
			return str += "way";
		}
	}

	if (str.slice(0, 2) == "gl" || str.slice(0, 2) == "ch") {
		newStr = str.slice(0, 2);
		str = str.slice(2, str.length);
		return str + newStr + "ay";
	} else {
		newStr = str.slice(0, 1);
		str = str.slice(1, str.length);
		return str + newStr + "ay";
	}

}

translatePigLatin("consonent");
