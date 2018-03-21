var URLify = function(string) {
	var url = '';

	for (var i = 0; i < string.length; i++) {
		if ( string[i] === ' ' && string[i + 1] !== ' ' ) {
			url += '%20';
		} else if ( string[i] !== ' ' ) {
			url += string[i];
		}
	}
	return url;
}

console.log(URLify('Mr John Smith'));
console.log(URLify('what about  more    huh'));