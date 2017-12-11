$(document).ready(function () {
	var search;
	//hide icon and reveal search box
	$("#icon").click(function () {
		$("#icon").addClass("animated fadeOut");
		$("#icon").addClass("hidden");
		$("#userInput").removeClass("hidden");
		$("#userInput").addClass("animated fadeIn");
	});

	//get user input on 'enter'
	$("#userInput").on('input', function () {
		$("#userInput").keypress(function (e) {
			if (e && e.keyCode == 13) {
				search = $("#userInput").val().replace(/\s+/g, '%20').toLowerCase();
				$.getJSON("https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch='" + search + "'&callback=?", function (data) {
					console.log(data);
					var results = data.query.pages;
					var arr = [];
					for (var i in results) {
						var res = "<div> <a href='https://en.wikipedia.org/?curid=" + i + "' target='_blank' > " + results[i].title + " </a><br>" + results[i].extract + " <hr></div>";
						arr.push(res);
					};
					for (var i = 9; i >= 0; i--) {
						$("#dumping-ground").removeClass("hidden").prepend(arr[i]);
					};
				});
			};
		});
	});
});

