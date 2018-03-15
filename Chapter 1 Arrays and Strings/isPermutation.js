var isPermutation= function(first, second) {
    if ( first.length !== second.length) {
        return false;
    }
    
    sorted1 = first.split('').sort().join('');
    sorted2 = second.split('').sort().join('');

    return sorted1 === sorted2;

}
console.log(isPermutation('dog', 'god'))