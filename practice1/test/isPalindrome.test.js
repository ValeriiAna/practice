const isPalindrome = require('../isPalindrome');

describe('isPalindrome', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test('isPalindrome', () => {
        expect(true).toBe(true);
    })

    test('str="kok" return true', () => {
        expect(isPalindrome('kok')).toBe(true);
    })
    test('str="skjakdjf" return false', () => {
        expect(isPalindrome('skjakdjf')).toBe(false);
    })
    test('str="" return false', () => {
        expect(isPalindrome('')).toBe(false);
    })
    test('str="null" return false', () => {
        expect(isPalindrome(null)).toBe(false);
    })
    test('str="1223" return false', () => {
        expect(isPalindrome(1223)).toBe(false);
    })
})