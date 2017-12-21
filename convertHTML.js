
function convertHTML(str) {
	charArr = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', '\'': '&apos;' };

	var newString = str.split('');

	for (var i = 0; i < newString.length; i++) {
		switch (newString[i]) {
			case '&':
				newString[i] = '&amp;';
				break;
			case '<':
				newString[i] = '&lt;';
				break;
			case '>':
				newString[i] = '&gt;';
				break;
			case '"':
				newString[i] = '&quot;';
				break;
			case "'":
				newString[i] = '&apos;';
				break;
		}
	}
	newString = newString.join().toString().split(",").join("");
	return newString;

}

convertHTML("Hamburgers < Pizza < Tacos");
