const f1 = require('../f1');

describe('f1', () => {
    test('test', () => {
        expect(true).toBe(true);
    })
    test('f1', () => {
        expect(f1(15)).toBe('1 2 three 4 five three 7 8 three five 11 three 13 14 threeFive ');
    })
    test('f1', () => {
        expect(f1(12)).toBe('1 2 three 4 five three 7 8 three five 11 three ');
    })
    test('f1', () => {
        expect(f1(2)).toBe('1 2 ');
    })
    test('f1', () => {
        expect(f1(20)).toBe('1 2 three 4 five three 7 8 three five 11 three 13 14 threeFive 16 17 three 19 five ');
    })
    test('check not number', () => {
        expect(f1('st')).toBe(false);
    })
    test('check null', () => {
        expect(f1(null)).toBe(false);
    })
})