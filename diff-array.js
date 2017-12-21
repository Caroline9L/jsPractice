function diffArray(arr1, arr2) {
	var newArr = [];

	function firstArr(first, second) {
		for (var i = 0; i < first.length; i++) {
			if (second.indexOf(first[i]) === -1) {
				newArr.push(first[i]);
			}
		}
	}
	firstArr(arr1, arr2);
	firstArr(arr2, arr1);
	// Same, same; but different.
	return newArr;
}

diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
