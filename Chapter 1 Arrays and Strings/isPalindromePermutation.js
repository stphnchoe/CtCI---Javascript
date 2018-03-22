var palindromePermutation = function(string) {
	var lowercase = string.toLowerCase();
	var charCount = {};
	var twoStrike = 2;

	for (var i = 0; i < lowercase.length; i++) {
		if (lowercase[i] === ' ') {
			continue;
		}
		charCount[lowercase[i]] = ++charCount[lowercase[i]] || 1;
	}

	for (var key in charCount) {
		if (charCount[key] % 2 === 1) {
			twoStrike--;
			if (twoStrike === 0) {
				return false;
			}
		}
	}
	return true;
}

console.log(palindromePermutation('Tact Coa'));
console.log(palindromePermutation('racecar'));
console.log(palindromePermutation('Tact coab'));
console.log(palindromePermutation('ra  ce car'));
