const sumOfElems = require('../sumOfElems');

describe('sumOfElems', () => {
    test('test', () => {
        expect(true).toBe(true);
    })


    test('arg1 % 15 === 0, arg1 *= -1, return arg1 + arg 2', () => {
        expect(sumOfElems(15, '6')).toBe(-9);
    })
    test('arg1 % 3 === 0, arg1 *= -1, return arg1 + arg 2', () => {
        expect(sumOfElems(3, '12')).toBe(9);
    })
    test('arg1 % 5 === 0, arg1 *= -1, return arg1 + arg 2', () => {
        expect(sumOfElems(5, '0')).toBe(-5);
    })
    test('arg1 % 15 !== 0, arg1 % 5 !== 0, arg1 % 3 !== 0, return arg1 + arg 2', () => {
        expect(sumOfElems(2, '4')).toBe(6);
    })
    test('arg1 % 15 !== 0, arg1 % 5 !== 0, arg1 % 3 !== 0, return arg1 + arg 2', () => {
        expect(sumOfElems(7, '1')).toBe(8);
    })
    test('typeof arg2 !== number, return false', () => {
        expect(sumOfElems(25, 'mjkfj')).toBe(false);
    })
    test('typeof arg1 === "string"', () => {
        expect(sumOfElems('4', 8)).toBe(false);
    })
})