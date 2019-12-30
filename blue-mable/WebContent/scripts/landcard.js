let LandCard = new Array();
let NomalLand = new Array();
let Tourist = new Array();
let SpecialLand = new Array();
	
	$.getJSON("/blue-marble/json/LandCard.json", function(json) {
		$(json).each(function(index, item) {
			LandCard.push(item)
		});
	});
	
	$.getJSON("/blue-marble/json/NomalLand.json", function(json) {
		$(json).each(function(index, item) {
			NomalLand.push(item)
		});
	});

	$.getJSON("/blue-marble/json/TouristDestination.json", function(json) {
		$(json).each(function(index, item) {
			Tourist.push(item)
		});
	});

	$.getJSON("/blue-marble/json/SpecialLand.json", function(json) {
		$(json).each(function(index, item) {
			SpecialLand.push(item)
		});
	});