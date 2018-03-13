var uniqueChar = function(string) {
    var obj = {};
    for (var i = 0; i < string.length; i++) {
        if (!obj[string[i]]) {
            obj[string[i]] = true;
        } else return false
    }
    return true;
}