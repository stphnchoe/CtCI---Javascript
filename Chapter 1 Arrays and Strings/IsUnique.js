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

console.log(uniqueChar('Hello'));
console.log(uniqueChar('Helloh'));
console.log(uniqueChar('heloh'));
console.log(uniqueChar('helo'));
console.log(uniqueChar('Bb'));