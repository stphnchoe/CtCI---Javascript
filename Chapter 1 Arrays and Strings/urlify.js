var URLify = function(string) {
	return string.split(' ').join('%20');
}

console.log(URLify('Mr John Smith'));