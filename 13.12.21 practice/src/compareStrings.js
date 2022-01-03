function compareStrings(str1, str2) {
    if(typeof str1 !== 'string' || typeof str2 !== 'string') {
        return 'Not string';
    }
    let string1 = str1.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    let string2 = str2.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
    let arr1 = string1.split('').sort().join('');
    let arr2 = string2.split('').sort().join('');

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if(arr1.length !== arr2.length){
                return false;
            }
             if (arr1[i] === arr2[j]) {
                return true;
            }
            }
        }
}

console.log(compareStrings( 'World', 'lorwd'));

module.exports = compareStrings;