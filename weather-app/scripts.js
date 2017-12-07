$(document).ready(function () {
	navigator.geolocation.getCurrentPosition(function (position) {
		lat = position.coords.latitude;
		long = position.coords.longitude;
		$.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + long, function (weather) {
			console.log(weather.main);
			var temp = weather.main.temp;
			var far = (Math.floor((temp * 9 / 5) + 32));
			var cel = (Math.floor(temp));
			var tempCel = false;

			$("#name").html(weather.name);
			$("#temp").html(far + "&#176;F");
			$("#icon").html('<img src="' + weather.weather[0].icon + '">');

			$("#convert").on("click", function () {
				if (tempCel === true) {
					tempCel = false;
					$("#temp").html(far + "&#176;F");
				} else if (tempCel === false) {
					tempCel = true;
					$("#temp").html(cel + "&#176;F");
				}
			});
		});
	});
});
