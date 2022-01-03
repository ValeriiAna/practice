const compareObj = require('../compareObj');

describe('compareObj', () => {
    test('{a:1 , b:1}; {a:1 , b:1}', () => {
        expect(compareObj({a: 1, b: 1}, {a: 1, b: 1})).toBe(true);
    })
    test('{a:4, b:12, c:3}, {a:4, b:12, c:3}', () => {
        expect(compareObj({a:4, b:12, c:3}, {a:4, b:12, c:3})).toBe(true);
    })
    test('{a:4, c:3}, {a:8, b:12, c:90}', () => {
        expect(compareObj({a:4, c:3}, {a:8, b:12, c:90})).toBe(false);
    })
    test('[12,4,8,90], {a:8, b:12, c:90}', () => {
        expect(compareObj([12,4,8,90], {a:8, b:12, c:90})).toBe(false);
    })
    test('{ }, {a:8, b:12, c:90}', () => {
        expect(compareObj({ }, {a:8, b:12, c:90})).toBe(false);
    })
    test('{a:4, c:3}, {a:4, b:12, c:3}', () => {
        expect(compareObj({a:4, c:3}, {a:4, b:12, c:3})).toBe(false);
    })
    test('null, {a:4, b:12, c:3}', () => {
        expect(compareObj(null, {a:4, b:12, c:3})).toBe('cannot compare obj');
    })
    test('null, null', () => {
        expect(compareObj(null, null)).toBe('cannot compare obj');
    })
    test('{b:9, n:1, m:30}, {b:9, n:1, m:30}', () => {
        expect(compareObj({b:9, n:1, m:30}, {b:9, n:1, m:30})).toBe(true);
    })
    test('{b:9, n:1, m:30}, {m:9, n:1, b:30}', () => {
        expect(compareObj({b:9, n:1, m:30}, {m:9, n:1, b:30})).toBe(false);
    })
    test('\'this is not object\', {m:9, n:1, b:30}', () => {
        expect(compareObj('this is not object', {m:9, n:1, b:30})).toBe(false);
    })
})