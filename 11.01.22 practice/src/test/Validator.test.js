const {validator} = require('../Validator');

describe('Validator', () => {
    test('isEmail valera@mail.ru', () => {
        expect(validator.isEmail('valera@mail.ru')).toEqual(true);
    })
    test('isEmail valeramail.ru', () => {
        expect(validator.isEmail('valeramail.ru')).toEqual(false);
    })
    test('isEmail typeof !== str', () => {
        expect(validator.isEmail(76887)).toEqual(false);
    })
    test('isEmail empty str', () => {
        expect(validator.isEmail('')).toEqual('your string is empty');
    })
    test('isEmail null', () => {
        expect(validator.isEmail()).toEqual(false);
    })
})

describe('Validator', () => {
    test('isDomen test.net', () => {
        expect(validator.isDomen('test.net')).toEqual(true);
    })
    test('isDomen test.com', () => {
        expect(validator.isDomen('test.com')).toEqual(true);
    })
    test('isDomen test.nek', () => {
        expect(validator.isDomen('test.nek')).toEqual(false);
    })
    test('isDomen typeof !== str', () => {
        expect(validator.isDomen(76887)).toEqual(false);
    })
    test('isDomen empty str', () => {
        expect(validator.isDomen('')).toEqual('your string is empty');
    })
    test('isDomen null', () => {
        expect(validator.isDomen()).toEqual(false);
    })
})

describe('Validator', () => {
    test('isDate 23.08.1995', () => {
        expect(validator.isDate('23.08.1995')).toEqual(true);
    })
    test('isDate 23.08.95', () => {
        expect(validator.isDate('23.08.95')).toEqual('invalid input data');
    })
    test('isDate typeof !== str', () => {
        expect(validator.isDate(76887)).toEqual(false);
    })
    test('isDate empty str', () => {
        expect(validator.isDate('')).toEqual('your string is empty');
    })
    test('isDate null', () => {
        expect(validator.isDate()).toEqual(false);
    })
})

describe('Validator', () => {
    test('isPhone +380 (67) 94-38-023', () => {
        expect(validator.isPhone('+380 (67) 94-38-023')).toEqual(true);
    })
    test('isPhone +380(67)9438023', () => {
        expect(validator.isPhone('380(67)9438023')).toEqual(false);
    })
    test('isPhone typeof !== str', () => {
        expect(validator.isPhone(76887)).toEqual(false);
    })
    test('isPhone empty str', () => {
        expect(validator.isPhone('')).toEqual('your string is empty');
    })
    test('isPhone null', () => {
        expect(validator.isPhone()).toEqual(false);
    })
})