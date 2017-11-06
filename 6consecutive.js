function makeArrayConsecutive2(statues) {
	var range = statues.sort(function (a, b) {
		return (a - b);
	});
	var sum = 0;
	if (range.length - 1 == 0) {
		return 0;
	} else {
		for (i = 0; i <= range.length - 2; i++) {
			sum += (range[i + 1] - range[i] - 1);
		}
		return sum;
	}
}