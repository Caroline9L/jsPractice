$(document).ready(function () {
	var channels = ["ESL_SC2", "noobs2ninjas", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "OgamingSC2"];
	var channel;

	channels.forEach(function (channel) {
		var streaming;
		var logo;
		var siteUrl;
		var statusCode;
		var newChannel;
		var name;
		var online = false;
		var url = "https://wind-bow.gomix.me/twitch-api/streams/" + channel + "?callback=?";

		$.getJSON(url, function (data) {
			if (data.stream === null || data.stream === undefined) {
				newChannel = data._links.channel;
				name = newChannel.slice(38, newChannel.length);
				streaming = "offline";
				online = false;
				$("#offline-channel").addClass("offline").append("<div class='row'><div class='col-md-4'><img src='https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F' style='max-height: 100px;'></div><div id='channelName' class='col-md-4'><p>" + name + "</p></div><div id='onOff' class='col-md-4'><p><em>" + streaming + "</em></p></div></div><hr>");
			} else {
				streaming = "online";
				online = true;
				channel = data.stream.channel.name;
				logo = data.stream.channel.logo;
				statusCode = data.stream.channel.status;
				$("#online-channel").addClass("online").append("<div class='row'><div class='col-md-4'><img src='" + logo + "' style='max-height: 100px;'></div><div class='col-md-8'> <div id='channelName' class='col-md-6'><p><a href=" + siteUrl + "target='_blank'>" + channel + "</a></p></div>	<div id='onOff' class='col-md-6'><p><em>" + streaming + "</em></p></div></div> 	<div class='row'><div id='status' ><p>" + statusCode + "</p></div>	</div> </div><hr>");
			};


			$("#online").on("click", function () {
				if (online === true) {
					$(".online").removeClass("hidden");
					$(".offline").addClass("hidden");
				};
			});
			$("#offline").on("click", function () {
				if (online === false) {
					$(".offline").removeClass("hidden");
					$(".online").addClass("hidden");
				};
			});
			$("#all").on("click", function () {
				if (online) {
					$(".online").removeClass("hidden");
					$(".offline").removeClass("hidden");
				};
			});

		});
	});

});
