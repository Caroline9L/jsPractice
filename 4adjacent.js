function adjacentElementsProduct(inputArray) {
    var arr = inputArray;
    var x = 0;
    var y = 0;
    var z = Number.MIN_SAFE_INTEGER;
    for (i = 0; i < arr.length; i++) {
        x = arr[i];
        y = arr[i+1];
        if (x*y > z) {
            z = x*y;
        };
    };
    return z;
};
