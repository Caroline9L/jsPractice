
function whatIsInAName(collection, source) {

	var searchTerm = Object.keys(source);

	return collection.filter(function (obj) {
		for (var i = 0; i < searchTerm.length; i++) {
			if (!obj.hasOwnProperty(searchTerm[i]) || obj[searchTerm[i]] !== source[searchTerm[i]]) {
				return false;
			}
		}
		return true
	});
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
