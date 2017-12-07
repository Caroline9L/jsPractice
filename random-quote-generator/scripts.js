$(document).ready(function () {
	var quoteBank = [];

	$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=30&callback=", function (data) {

		data.forEach(function (val) {
			quoteBank.push(val);
		})
		changeQuote();
	});

	var randomQuote = $("quote").text();

	function changeQuote() {
		var randomQuote = Math.floor((Math.random() * 29));
		$("#quote-text").fadeOut();
		$("#text").html(quoteBank[randomQuote].content);
		$("#author").html(quoteBank[randomQuote].title);
		$("#quote-text").fadeIn();
		$("author").fadeIn();
	}

	$("button").on('click', function () {
		changeQuote();
	});

	$(".fa").click(function () {
		window.open('https://twitter.com/intent/tweet?text=' + '"' + $("#quote-text").text() + '"  -- ' + $("#author").text());
	});
});