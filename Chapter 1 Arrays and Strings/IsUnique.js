//using a data structure
var uniqueChar = function(string) {
    var str = string.toLowerCase();
    var duplicateCheck = {};
    for (var i = 0; i < str.length; i++) {
        if ( duplicateCheck[str[i]] ) {
            return false;
        }
        duplicateCheck[str[i]] = string[i]
    }
    return true;
}

//witout a data structure
var uniqueChar = function(string) {
    var str = string.toLowerCase();
    for (var i = 0; i < str.length; i++) {
        for ( var j = i + 1; j < str.length; j++) {
            if ( str[j] === str[i] ) {
                return false;
            }
        }
    }
    return true;
}

//chars non unique sequential
console.log(uniqueChar('hello') === false);
//chars non unique separate
console.log(uniqueChar('heloh') === false);
//chars all unique
console.log(uniqueChar('helo') === true);
//chars non unique different case
console.log(uniqueChar('Bb') === false);