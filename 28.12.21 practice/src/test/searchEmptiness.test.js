const searchEmptiness = require('../searchEmptiness');

describe('searchEmptiness', () => {
    test('ture', () => {
        expect(searchEmptiness({a:undefined})).toEqual(true);
    })
    test('true', () => {
        expect(searchEmptiness({})).toEqual(true);
    })
    test('true', () => {
        expect(searchEmptiness({a: null})).toEqual(true);
    })
    test('false', () => {
        expect(searchEmptiness({a:1})).toEqual(false);
    })
})