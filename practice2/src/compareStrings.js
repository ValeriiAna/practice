function compareStrings(str1, str2) {
    if(typeof str1 !== 'string' || typeof str2 !== 'string') {
        return 'Not string';
    }
    str1.toLowerCase().replace(/[^a-zA-Z]/g, '');
    str2.toLowerCase().replace(/[^a-zA-Z]/g, '');
    let arr1 = str1.split('').sort().join('');
    let arr2 = str2.split('').sort().join('');

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1 === arr2) {
                return true;
            } else {
                return false;
            }
        }
    }
}

console.log(compareStrings('5678', '098765'));

module.exports = compareStrings;