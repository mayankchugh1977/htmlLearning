function getCities(country) {
  var xhr = new XMLHttpRequest();
	var url = 'https://api.openaq.org/v1/cities?country=' + country.value;
	xhr.open('GET', url);
	xhr.send();
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			printCities(xhr.response);
		}
	};
}

function printCities(response) {
	console.log(response);
}