const checkNumber = require('../checkNumber');

describe('checkNumber', () => {
    test('test', () => {
        expect(true).toBe(true);
    })


    test('value % 2 !== 0, value % 10 !== 0, value % value !== 0', () => {
        expect(checkNumber(11)).toEqual([true, false, false])
    })
    test('value % 2 === 0, value % 10 === 0, value % value === 0', () => {
        expect(checkNumber(100)).toEqual([false, true, true])
    })
    test('value % 2 === 0, value % 10 !== 0, value % value === 0', () => {
        expect(checkNumber(124)).toEqual([false, true, false])
    })
    test('value === "str"', () => {
        expect(checkNumber('jfkf')).toBe(NaN)
    })
    test('value < 0', () => {
        expect(checkNumber(-10)).toEqual([false, true, true])
    })
})