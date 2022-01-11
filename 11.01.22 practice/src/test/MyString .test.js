const {str} = require('../myString');


describe('MyString', () => {

    test('reverse lera', () => {
        expect(str.reverse('lera')).toEqual('arel');
    })
    test('reverse 1234567', () => {
        expect(str.reverse('1234567')).toEqual('7654321');
    })
    test('reverse typeof !== str', () => {
        expect(str.reverse(4875845)).toEqual(false);
    })
    test('reverse empty str', () => {
        expect(str.reverse('')).toEqual('your string is empty');
    })
    test('reverse null', () => {
        expect(str.reverse()).toEqual(false);
    })
})

describe('MyString', () => {
    test('ucFirst lera', () => {
        expect(str.ucFirst('lera')).toEqual('Lera');
    })
    test('ucFirst typeof !== str', () => {
        expect(str.ucFirst(876)).toEqual(false);
    })
    test('ucFirst null', () => {
        expect(str.ucFirst()).toEqual(false);
    })
    test('ucFirst empty str', () => {
        expect(str.ucFirst('')).toEqual('your string is empty');
    })
})

describe('MyString', () => {
    test('ucWords lera lera lera', () => {
        expect(str.ucWords('lera lera lera')).toEqual('Lera Lera Lera');
    })
    test('ucWords typeof !== str', () => {
        expect(str.ucWords(876)).toEqual(false);
    })
    test('ucWords null', () => {
        expect(str.ucWords()).toEqual(false);
    })
    test('ucWords empty str', () => {
        expect(str.ucWords('')).toEqual('your string is empty');
    })
})