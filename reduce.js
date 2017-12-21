function sumAll(arr) {
	var max = Math.max(arr[0], arr[1]);
	var min = Math.min(arr[0], arr[1]);
	var temp = 0;
	for (var i = min; i <= max; i++) {
		temp += i;
	}
	return temp;
}

sumAll([1, 4]);


//es6 way if you have a full array

var sum = (array) => array.reduce((total, current) => total + current, 0);

var nums = [1, 2, 3, 4];

console.log(sum(nums));