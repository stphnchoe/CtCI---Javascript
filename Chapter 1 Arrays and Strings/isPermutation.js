var isPermutation= function(first, second) {
    var string1 = {};
    var string2 = {};

    //string.toLowerCase() each string

    //whitespace omitt or count

    //needs to have same length
    if (first.length !== second.length) {
        return false;
    }
    //needs to have same characters
    for (var i = 0; i < first.length; i++) {
        string1[first[i]] = ++string1[first[i]] || 1;
        string2[second[i]] = ++string2[second[i]] || 1;
    }

    for (var key in string1) {
        if (string1[key] !== string2[key]) {
            return false;
        }
    }
    return true;
}
console.log(isPermutation('dog', 'god'));
console.log(isPermutation('', ''));

//OPTIMAL VERSION

var isPermutation = function(first, second) {
    var string1 = first.toLowerCase();
    var string2 = second.toLowerCase();
    var charCount = {}

    if (string1.length !== string2.length) {
        return false;
    }

    for (var i = 0; i < string1.length; i++) {
        charCount[string1[i]] = ++charCount[string1[i]] || 1;
    }

    for (var j = 0; j < string2.length; j++) {
        charCount[string2[j]] = --charCount[string2[j]];
        if (charCount[string2[j]] < 0) {
            return false;
        }
    }
    return true;
}

console.log(isPermutation('dog', 'god'));
console.log(isPermutation('', ''));
console.log(isPermutation('dog','God'));
console.log(isPermutation('dgoa','goa'));
console.log(isPermutation('oooggf', 'gofo'));