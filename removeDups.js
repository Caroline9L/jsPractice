
function uniteUnique(arr1, arr2, arr3) {
	var tempArr = [];

	for (var i = 0; i < arguments.length; i++) {
		var arrArgs = arguments[i];

		for (var j = 0; j < arrArgs.length; j++) {
			var indexVal = arrArgs[j];

			if (tempArr.indexOf(indexVal) < 0) {
				tempArr.push(indexVal);
			}
		}
	}

	return tempArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);