function isSymbol(char) {
    return ',.!:-_? '.includes(char)

}

function checkSymbols(str) {
    return [',', '.', '!', ':', '-', '_', '?', ' '].some((symbol) => str.includes(symbol));

}

function isValid(str) {
    if (str || typeof str === 'string') {
        if (str.length >= 2 && str.length <= 20 && checkSymbols(str) && (!isSymbol(str[0]) || str[0] === str[0].toUpperCase())) {
            return 'VALID';
        } else {
            return 'INVALID';
        }
    }

    return 'Incorrect input data';
}

console.log(isValid('fghtrkvdoasdvitoeo????'));
console.log(isValid('Log!c'));
console.log(isValid('PROJECT!'));
console.log(isValid(123));
console.log(isValid(NaN));
console.log(isSymbol('Log!c'));

module.exports = { isValid,  isSymbol, checkSymbols };