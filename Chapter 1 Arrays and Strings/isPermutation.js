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