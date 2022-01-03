const crossingObj = require('../crossingObj');

describe('crossingObj' , () => {
    test('{b:2}', () => {
        expect(crossingObj({c:1, b:2}, {a:1, b:2})).toEqual({b:2});
    })
    test('{ c: 5, n: 5 }', () => {
        expect(crossingObj({a:1, c:5, b:3, n:5}, {c:5, n:5, f:9, k:3})).toEqual({ c: 5, n: 5 });
    })
    test('{}', () => {
        expect(crossingObj({c:1, b:2}, {a:1, b:4})).toEqual({});
    })
    test('!== {}', () => {
        expect(crossingObj({c:1, b:2}, 45678)).toEqual(false);
    })
    test('{}', () => {
        expect(crossingObj({c:1, b:2, v:13, h:4}, {c:2, b:3, v:14, h:5})).toEqual({});
    })
    test('null', () => {
        expect(crossingObj(null, {c:2, b:3, v:14, h:5})).toEqual(false);
    })
})