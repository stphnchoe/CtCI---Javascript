var URLify = function(string, strLength) {
	var url = '';

	for (var i = 0; i < string.length; i++) {
		if ( string[i] === ' ' && string[i + 1] !== ' ' ) {
			url += '%20';
		} else if ( string[i] !== ' ' ) {
			url += string[i];
		}
		if (i + 1 === strLength) {
			return url;
		}
	}
	return url;
}

console.log(URLify('Mr John Smith  ', 13));
console.log(URLify('Mr John  Smith ?', 13));
console.log(URLify('Mr John  Smith ?', 20));
console.log(URLify('Mr John  Smith ?', 14));