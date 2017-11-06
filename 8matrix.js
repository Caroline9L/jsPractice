function matrixElementsSum(matrix) {
	var sum = 0;
	var fail = [[]];
	for (var i = 0; i < matrix[0].length; i++) {
		if (matrix[0][i] === 0) {
			fail[0].push(false);
		} else {
			sum += matrix[0][i];
			fail[0].push(true);
		}
	}
	for (var j = 1; j < matrix.length; j++) {
		fail.push([]);
		for (var k = 0; k < matrix[j].length; k++) {
			if (matrix[j][k] !== 0 && fail[j - 1][k]) {
				sum += matrix[j][k];
				fail[j].push(true);
			} else {
				fail[j].push(false);
			}
		}
	}
	return sum;
}

// *find 0 - loop through matrix[i]
// note the index of '0'
//     slice that index
//     return new array*
// next row, note index of (# below i(0)) - essentially 0
//     slice that index
//     repeat *-*

// add up remaining numbers in all rows