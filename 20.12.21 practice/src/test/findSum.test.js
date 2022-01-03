const findSum = require('../findSum');

describe('findSum' , () => {
    test('[1,2,4,9] arr[i] + arr[j] === val === 8', () =>{
        expect(findSum([1,2,4,9], 8)).toBe(false);
    })
    test('[1,2,4,4] arr[i] + arr[j] === val === 8', () => {
        expect(findSum([1,2,4,4], 8)).toBe(true);
    })
    test('[1,12,15,3,4,7], arr[i] + arr[j] === val === 8', () => {
        expect(findSum([1,12,15,3,4,7], 8)).toBe(true);
    })
    test('[1,2,4,4], "eight"', () => {
        expect(findSum([1,2,4,4], "eight")).toBe('val must be a number');
    })
    test('empty arr', () => {
        expect(findSum([], 8)).toBe(false);
    })
    test('Array.isArray', () => {
        expect(findSum(1234445678, 8)).toBe(false);
    })
    test('[1,2,4,4], null', () => {
        expect(findSum([1,2,4,4], null)).toBe('val must be a number');
    })
})