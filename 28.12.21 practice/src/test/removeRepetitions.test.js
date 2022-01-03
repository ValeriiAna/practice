const removeRepetitions = require('../removeRepetitions');

describe('removeRepetitions', () => {
    test('[1,2,3]', () => {
        expect(removeRepetitions([1,2,3,1,2])).toEqual([1,2,3]);
    })
    test('[1,2,3,4,5,6]', () => {
        expect(removeRepetitions([1,2,3,3,3,4,5,6,1,6])).toEqual([1,2,3,4,5,6]);
    })
    test('empty arr', () => {
        expect(removeRepetitions([])).toBe(false);
    })
    test('isArray', () => {
        expect(removeRepetitions(3273478)).toBe(false);
    })
    test('[1,2,3,1,2,5,6,7,7,8,6]', () => {
        expect(removeRepetitions([1,2,3,1,2,5,6,7,7,8,6])).toEqual([1, 2, 3, 5, 6, 7, 8])
    })
    test('not repetitions', () => {
        expect(removeRepetitions([1,2,3,4,5,6,7,8,9])).toEqual([1,2,3,4,5,6,7,8,9])
    })
})