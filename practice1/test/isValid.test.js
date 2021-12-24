const  {isValid,  isSymbol, checkSymbols } = require('../isValid')

describe('isSymbol', () => {
    test('isSymbol', ()=> {
        expect(isSymbol('Log!c')).toBe(false);
    })
    test('isSymbol', () => {
        expect(isSymbol(',.!:-_? ')).toBe(true);
    })
})

describe('checkSymbols', () => {
    test('checkSymbols', () => {
        expect(checkSymbols('symbol')).toBe(false);
    })
    test('checkSymbol', () => {
        expect(checkSymbols(',.!:-_? ')).toBe(true);
    })
})

describe('isValid', () => {
    test('isValid', () => {
        expect(isValid('Log!c')).toBe('VALID');
    })
    test('isValid', () => {
        expect(isValid(123)).toBe('INVALID');
    })
    test('isValid', () => {
        expect(isValid('fghtrkvdoasdvitoeo????')).toBe('INVALID');
    })
    test('isValid', () => {
        expect(isValid('PROJECT!')).toBe('VALID');
    })
    test('isValid', () => {
        expect(isValid(NaN)).toBe('Incorrect input data');
    })
    test('isValid', () => {
        expect(isValid('Valeriia')).toBe('INVALID');
    })
})

