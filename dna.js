
function pairElement(str) {
	var pairs = [];

	var search = function (char) {
		switch (char) {
			case 'A':
				pairs.push(['A', 'T']);
				break;
			case 'T':
				pairs.push(['T', 'A']);
				break;
			case 'G':
				pairs.push(['G', 'C']);
				break;
			case 'C':
				pairs.push(['C', 'G']);
				break;
		}
	};

	for (var i = 0; i < str.length; i++) {
		search(str[i]);
	}

	return pairs;
}

pairElement("GCG");
