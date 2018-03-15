var palinPermu = function(string) {
	//create hash to store char count
	let hash = {};
	string = string.toLowerCase();

	//loop char to store in hash
	for (var i = 0; i < string.length; i++) {
		if (string[i] === ' '){}
		else if (!hash[string[i]]) {
			hash[string[i]] = 1;
		} else hash[string[i]]++;
	}

	//check all char count is even, except 1 char
	let count = 0;
	for (var key in hash) {
		if (hash[key]/2 !== 0 && count === 1) {
			return false;
		}

		if(hash[key] === 1) {
			count++;
		}
	}

	return true;

	console.log(hash);
}

//TESTS
console.log(palinPermu('Tact Coa'));
console.log(palinPermu('racecar'));
console.log(palinPermu('Tact coab'));
console.log(palinPermu('race car'));
