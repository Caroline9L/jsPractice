function myReplace(str, before, after) {
	var res;
	if (before.charAt(0) === before.charAt(0).toUpperCase()) {
		after = after.charAt(0).toUpperCase() + after.slice(1);
		//        return after;
		res = str.replace(before, after);
	} else {
		res = str.replace(before, after);
	}

	return res;
}

myReplace("This has a spellngi error", "spellngi", "spelling");