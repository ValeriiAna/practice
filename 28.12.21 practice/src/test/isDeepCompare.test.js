const isDeepCompare = require('../isDeepCompare');

describe('isDeepCompare', () => {
    test('true', () => {
        expect(isDeepCompare({ a: 1, b: { c: 1 }}, { a: 1, b: { c: 1 }})).toEqual(true);
    })
    test('false', () => {
        expect(isDeepCompare({ a: 1, b: { c: 1 }}, {a:4, b: {c:1}})).toEqual(false);
    })
    test('false', () => {
        expect(isDeepCompare({a:4, b: {c:1}}, {n:4, k:{m:1}})).toEqual(false);
    })
    test('false', () => {
        expect(isDeepCompare({ a: 1, b: { c: 1 }}, {a:4})).toEqual(false);
    })
    test('false', () => {
        expect(isDeepCompare({ a: 1, b: { c: 1 }}, {NaN})).toEqual(false);
    })
    test('true', () => {
        expect(isDeepCompare({a:null}, {a:null})).toEqual(true);
    })
    test('true', () => {
        expect(isDeepCompare({NaN}, {NaN})).toEqual(true);
    })
})