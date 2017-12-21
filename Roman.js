
function convertToRoman(num) {
	var roman = '';

	var Romans = [
		"M",
		"CM",
		"D",
		"CD",
		"C",
		"XC",
		"L",
		"XL",
		"X",
		"IX",
		"V",
		"IV",
		"I"
	];
	var values = [
		1000,
		900,
		500,
		400,
		100,
		90,
		50,
		40,
		10,
		9,
		5,
		4,
		1
	];

	for (var i = 0; i < values.length; i++) {
		if (num < 1) {
			return '';
		} else if (num >= values[i]) {
			return Romans[i] + convertToRoman(num - values[i]);
		}
	}

}

convertToRoman(36);